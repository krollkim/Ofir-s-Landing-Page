"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  X,
  SlidersHorizontal,
  Eye,
  PauseCircle,
  FileText,
} from "lucide-react";

const defaultSettings = {
  largeText: false,
  highContrast: false,
  reduceMotion: false,
};

// Apply settings to document
function applySettings(newSettings) {
  const root = document.documentElement;

  if (newSettings.largeText) {
    root.classList.add("accessibility-large-text");
  } else {
    root.classList.remove("accessibility-large-text");
  }

  if (newSettings.highContrast) {
    root.classList.add("accessibility-high-contrast");
  } else {
    root.classList.remove("accessibility-high-contrast");
  }

  if (newSettings.reduceMotion) {
    root.classList.add("accessibility-reduce-motion");
  } else {
    root.classList.remove("accessibility-reduce-motion");
  }
}

// Hydration-safe mounted check
const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

// Load settings from localStorage
function getInitialSettings() {
  if (typeof window === "undefined") return defaultSettings;

  const savedSettings = localStorage.getItem("accessibility-settings");
  if (savedSettings) {
    try {
      return JSON.parse(savedSettings);
    } catch {
      return defaultSettings;
    }
  }
  return defaultSettings;
}

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showStatement, setShowStatement] = useState(false);
  const [settings, setSettings] = useState(getInitialSettings);

  const mounted = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    applySettings(settings);
  }, [settings]);

  const updateSetting = (key) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    localStorage.setItem("accessibility-settings", JSON.stringify(newSettings));
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setShowStatement(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  if (!mounted) return null;

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2, ease: [0, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.2 },
    }),
  };

  const toggleItems = [
    {
      key: "largeText",
      icon: SlidersHorizontal,
      label: "הגדלת טקסט",
      description: "הגדלת הטקסט לקריאה נוחה יותר",
    },
    {
      key: "highContrast",
      icon: Eye,
      label: "ניגודיות גבוהה",
      description: "ניגודיות צבעים מוגברת",
    },
    {
      key: "reduceMotion",
      icon: PauseCircle,
      label: "הפחתת תנועה",
      description: "ביטול אנימציות",
    },
  ];

  return (
    <div className="accessibility-widget">
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-[90] w-16 h-16 rounded-full
          bg-lilac-300 border border-lilac-400
          flex items-center justify-center cursor-pointer
          hover:bg-lilac-400 hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-lilac-500/50
          transition-all duration-300 shadow-lg shadow-lilac-300/40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="אפשרויות נגישות"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-8 h-8 text-gray-800" />
      </motion.button>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                setShowStatement(false);
              }}
              className="fixed inset-0 z-[91] bg-black/20 backdrop-blur-sm"
            />

            {/* Menu */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-28 left-8 z-[92]
                bg-white/95 backdrop-blur-2xl rounded-2xl
                border border-lilac-200 shadow-2xl shadow-lilac-300/20 overflow-hidden"
              style={{ width: '320px', maxWidth: '320px', fontSize: '16px', lineHeight: '1.5' }}
              role="dialog"
              aria-label="הגדרות נגישות"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-lilac-100">
                <div className="flex items-center gap-3">
                  <Accessibility className="w-7 h-7 text-lilac-500" />
                  <h2 className="text-[1.4rem] font-semibold text-gray-800 tracking-wide">
                    נגישות
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowStatement(false);
                  }}
                  className="w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center
                    text-gray-500 hover:text-gray-700 hover:bg-lilac-50
                    transition-colors cursor-pointer"
                  aria-label="סגור תפריט נגישות"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-3">
                {!showStatement ? (
                  <div className="space-y-2">
                    {toggleItems.map((item, index) => (
                      <motion.button
                        key={item.key}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={() => updateSetting(item.key)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl
                          transition-all duration-200 cursor-pointer group
                          ${
                            settings[item.key]
                              ? "bg-lilac-100 border border-lilac-300"
                              : "bg-gray-50 border border-transparent hover:bg-lilac-50"
                          }`}
                        aria-pressed={settings[item.key]}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center
                          transition-colors ${
                            settings[item.key]
                              ? "bg-lilac-200 text-lilac-700"
                              : "bg-gray-100 text-gray-500 group-hover:text-gray-600"
                          }`}
                        >
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 text-right">
                          <p
                            className={`text-[1.1rem] font-medium transition-colors ${
                              settings[item.key] ? "text-gray-800" : "text-gray-700"
                            }`}
                          >
                            {item.label}
                          </p>
                          <p className="text-[0.95rem] text-gray-500">{item.description}</p>
                        </div>
                        {/* Toggle Switch */}
                        <div
                          className={`relative w-[3.5rem] h-[2rem] rounded-full transition-colors ${
                            settings[item.key] ? "bg-lilac-400" : "bg-gray-300"
                          }`}
                        >
                          <motion.div
                            className="absolute top-[0.15rem] w-[1.7rem] h-[1.7rem] bg-white rounded-full shadow-md"
                            animate={{ left: settings[item.key] ? "1.65rem" : "0.15rem" }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        </div>
                      </motion.button>
                    ))}

                    {/* Accessibility Statement Link */}
                    <motion.button
                      custom={3}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => setShowStatement(true)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl
                        bg-gray-50 border border-transparent hover:bg-lilac-50
                        transition-all duration-200 cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:text-gray-600 transition-colors">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1 text-right">
                        <p className="text-[1.1rem] font-medium text-gray-700">
                          הצהרת נגישות
                        </p>
                        <p className="text-[0.95rem] text-gray-500">צפייה במחויבות שלנו</p>
                      </div>
                      <span className="text-gray-400 text-[1.4rem]">&larr;</span>
                    </motion.button>
                  </div>
                ) : (
                  /* Accessibility Statement */
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-2"
                  >
                    <button
                      onClick={() => setShowStatement(false)}
                      className="flex items-center gap-2 text-[1.1rem] text-gray-500 hover:text-lilac-600
                        transition-colors mb-4 cursor-pointer"
                    >
                      <span>&rarr;</span> חזרה
                    </button>
                    <h3 className="text-[1.3rem] font-semibold text-gray-800 mb-4">
                      הצהרת נגישות
                    </h3>
                    <div className="space-y-3 text-[1.05rem] text-gray-600 leading-relaxed max-h-72 overflow-y-auto pr-2 custom-scrollbar">
                      <p>
                        אנו מחויבים להבטחת נגישות דיגיטלית לאנשים עם מוגבלויות.
                        אנו משפרים באופן מתמיד את חוויית המשתמש עבור כולם ומיישמים
                        את תקני הנגישות הרלוונטיים.
                      </p>
                      <p>
                        <strong className="text-gray-700">סטטוס התאמה:</strong> אנו שואפים
                        לעמוד בהנחיות WCAG 2.1 ברמה AA.
                      </p>
                      <p>
                        <strong className="text-gray-700">תכונות נגישות:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 pr-2">
                        <li>מבנה HTML סמנטי</li>
                        <li>תמיכה בניווט מקלדת</li>
                        <li>אפשרויות התאמת גודל טקסט</li>
                        <li>מצב ניגודיות גבוהה</li>
                        <li>אפשרויות הפחתת תנועה</li>
                        <li>תוויות ונקודות ציון ARIA</li>
                      </ul>
                      <p>
                        <strong className="text-gray-700">משוב:</strong> אנו מברכים על
                        המשוב שלכם בנוגע לנגישות האתר. אנא צרו איתנו קשר אם נתקלתם
                        במחסומים כלשהם.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
