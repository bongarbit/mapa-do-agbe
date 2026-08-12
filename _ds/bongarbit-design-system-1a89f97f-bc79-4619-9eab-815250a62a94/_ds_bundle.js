/* @ds-bundle: {"format":4,"namespace":"BongarbitDesignSystem_1a89f9","components":[{"name":"Frame","sourcePath":"components/brand/Frame.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Frame.jsx":"8789838ef684","components/brand/Logo.jsx":"6c03b4c6c64a","components/core/Badge.jsx":"5d831c904b96","components/core/Button.jsx":"8ac6c6b1fa6b","components/core/Card.jsx":"a24e1cb6fc8a","components/core/Divider.jsx":"119ca08822a1","components/core/Eyebrow.jsx":"498e12e59d9c","components/core/IconButton.jsx":"ba295958e28e","components/core/Tag.jsx":"5a58fbd4514a","components/feedback/Callout.jsx":"bba89a9ea583","components/feedback/Dialog.jsx":"e04b3ba5e36a","components/feedback/Tooltip.jsx":"dfd17b1e1a01","components/forms/Checkbox.jsx":"7e9756005b2d","components/forms/Field.jsx":"d8b0fcb889e4","components/forms/Input.jsx":"8fbae2c17c7d","components/forms/Radio.jsx":"2fb2d2785b26","components/forms/Select.jsx":"4251e6ff3eb9","components/forms/Switch.jsx":"b6528aeac22f","components/forms/Textarea.jsx":"3a07d9b79770","components/navigation/NavBar.jsx":"3b92ec4d7e5f","components/navigation/Tabs.jsx":"3ae2684c8741","ui_kits/site/screens.jsx":"5ffeb2a2db38"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BongarbitDesignSystem_1a89f9 = window.BongarbitDesignSystem_1a89f9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Frame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Frame({
  texture = true,
  tone = "paper",
  padding = "var(--space-7)",
  assetBase = "/assets/backgrounds",
  style,
  children,
  ...rest
}) {
  const dark = tone === "ink";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      padding,
      background: dark ? "var(--preto-grafite)" : texture ? `var(--papel) url(${assetBase}/paper-texture.png) center/cover` : "var(--papel)",
      color: dark ? "var(--text-on-inverse)" : "var(--text-strong)",
      boxShadow: dark ? "inset 0 0 0 1px var(--papel), inset 0 0 0 5px var(--preto-grafite), inset 0 0 0 6px var(--papel)" : "var(--frame-double)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Frame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Frame.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  horizontal: "lockup-horizontal.png",
  vertical: "lockup-vertical.png",
  wordmark: "wordmark.png",
  tagline: "wordmark-tagline.png",
  symbol: "symbol.png",
  "cafe-com-bongarbit": "cafe-com-bongarbit.png",
  circula: "circula.png"
};
/* Negative cuts: linework in Papel (or pure white), accent dot preserved in its own colour.
   Full-colour art has no negative — it is used as supplied on any background, never filtered. */
const NEGATIVE = {
  wordmark: "wordmark-negativo.png",
  tagline: "wordmark-tagline-negativo.png",
  "cafe-com-bongarbit": "cafe-com-bongarbit-negativo.png",
  circula: "circula-branco.png"
};
const WHITE = {
  "cafe-com-bongarbit": "cafe-com-bongarbit-branco.png",
  circula: "circula-branco.png"
};
function Logo({
  variant = "horizontal",
  tone = "ink",
  width = 220,
  assetBase = "/assets/logo",
  style,
  ...rest
}) {
  const file = tone === "branco" && WHITE[variant] || tone === "paper" && NEGATIVE[variant] || SRC[variant];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase + "/" + file,
    alt: "Bongarbit",
    style: {
      width,
      minWidth: "var(--logo-min-width)",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: ["var(--grafite-08)", "var(--text-strong)"],
  success: ["var(--verde-baoba)", "var(--papel)"],
  info: ["var(--azul-caixa-dagua)", "var(--papel)"],
  warning: ["var(--amarelo-ocre)", "var(--preto-grafite)"],
  danger: ["var(--terracota-queimada)", "var(--papel)"]
};
function Badge({
  tone = "neutral",
  style,
  children,
  ...rest
}) {
  const [bg, fg] = TONE[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      alignSelf: "flex-start",
      background: bg,
      color: fg,
      padding: "3px 9px",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: "8px 14px",
  md: "12px 22px",
  lg: "16px 30px"
};
const FS = {
  sm: "var(--fs-caption)",
  md: "var(--fs-small)",
  lg: "var(--fs-body)"
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  style,
  children,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    font: "inherit",
    fontSize: FS[size],
    fontWeight: "var(--fw-semibold)",
    letterSpacing: "var(--ls-eyebrow)",
    textTransform: "uppercase",
    padding: PAD[size],
    border: "1px solid var(--border-rule)",
    borderRadius: "var(--radius-none)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? .4 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)"
  };
  const skin = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--papel)",
      boxShadow: "var(--shadow-print)"
    },
    secondary: {
      background: "var(--papel-claro)",
      color: "var(--text-strong)",
      boxShadow: "var(--shadow-print)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    inverse: {
      background: "var(--papel)",
      color: "var(--preto-grafite)",
      boxShadow: "none"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      ...base,
      ...skin,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "translate(2px,2px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "none";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
    }
  }, rest), startIcon, children, endIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  media,
  eyebrow,
  title,
  meta,
  tone = "paper",
  style,
  children,
  ...rest
}) {
  const dark = tone === "ink";
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      background: dark ? "var(--surface-inverse)" : "var(--surface-card)",
      color: dark ? "var(--text-on-inverse)" : "var(--text-strong)",
      border: "1px solid var(--border-rule)",
      boxShadow: "var(--shadow-print)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--border-rule)",
      overflow: "hidden"
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: dark ? "var(--amarelo-ocre)" : "var(--text-accent)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-bold)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: dark ? "var(--text-on-inverse-muted)" : "var(--text-body)"
    }
  }, children), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)",
      fontSize: "var(--fs-caption)",
      color: dark ? "var(--text-on-inverse-muted)" : "var(--text-muted)",
      letterSpacing: ".06em"
    }
  }, meta)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  weight = "hair",
  tone = "ink",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: weight === "thick" ? "var(--rule-thick)" : "var(--rule-hair)",
      background: tone === "paper" ? "var(--border-inverse)" : "var(--border-rule)",
      margin: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = "ink",
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "block",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: tone === "paper" ? "var(--amarelo-ocre)" : "var(--text-accent)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  label,
  size = "md",
  variant = "secondary",
  disabled = false,
  style,
  children,
  ...rest
}) {
  const skin = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--papel)"
    },
    secondary: {
      background: "var(--papel-claro)",
      color: "var(--text-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1px solid transparent"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      width: S[size],
      height: S[size],
      display: "inline-grid",
      placeItems: "center",
      border: "1px solid var(--border-rule)",
      borderRadius: "var(--radius-none)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      border: "1px solid var(--border-rule)",
      background: selected ? "var(--preto-grafite)" : "transparent",
      color: selected ? "var(--papel)" : "var(--text-strong)",
      padding: "5px 12px",
      fontSize: "var(--fs-caption)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      cursor: "pointer",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      opacity: .6
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  info: "var(--azul-caixa-dagua)",
  success: "var(--verde-baoba)",
  warning: "var(--amarelo-ocre)",
  danger: "var(--terracota-queimada)"
};
function Callout({
  tone = "info",
  title,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--papel-claro)",
      border: "1px solid var(--border-rule)",
      borderTop: "var(--rule-thick) solid " + T[tone],
      padding: "var(--space-4) var(--space-5)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      marginBottom: "var(--space-2)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  onClose,
  footer,
  width = 520,
  style,
  children,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(22,21,18,.72)",
      display: "grid",
      placeItems: "center",
      zIndex: 60
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "92vw",
      background: "var(--papel)",
      boxShadow: "var(--frame-double), var(--shadow-print-strong)",
      padding: "var(--space-6)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-bold)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      font: "inherit",
      fontSize: 18,
      background: "none",
      border: 0,
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--fs-small)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false)
  }, rest), children, on && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      whiteSpace: "nowrap",
      background: "var(--preto-grafite)",
      color: "var(--papel)",
      fontSize: "var(--fs-micro)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      padding: "5px 9px",
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontSize: "var(--fs-small)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      flex: "0 0 18px",
      display: "grid",
      placeItems: "center",
      border: "1px solid var(--border-rule)",
      background: checked ? "var(--preto-grafite)" : "var(--papel-claro)",
      color: "var(--papel)",
      fontSize: 12,
      lineHeight: 1
    }
  }, checked ? "×" : ""), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-body)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--terracota-queimada)"
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--status-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    style: {
      ...{
        width: "100%",
        font: "inherit",
        fontSize: "var(--fs-small)",
        color: "var(--text-strong)",
        background: "var(--papel-claro)",
        border: "1px solid var(--border-rule)",
        borderRadius: "var(--radius-none)",
        padding: "11px 13px",
        outlineOffset: "2px"
      },
      borderColor: invalid ? "var(--status-danger)" : "var(--border-rule)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  onChange,
  label,
  name,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontSize: "var(--fs-small)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(true),
    "data-name": name,
    style: {
      width: 18,
      height: 18,
      flex: "0 0 18px",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      border: "1px solid var(--border-rule)",
      background: "var(--papel-claro)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--preto-grafite)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    style: {
      ...{
        width: "100%",
        font: "inherit",
        fontSize: "var(--fs-small)",
        color: "var(--text-strong)",
        background: "var(--papel-claro)",
        border: "1px solid var(--border-rule)",
        borderRadius: "var(--radius-none)",
        padding: "11px 13px",
        outlineOffset: "2px"
      },
      appearance: "none",
      backgroundImage: "linear-gradient(45deg,transparent 50%,var(--text-strong) 50%),linear-gradient(135deg,var(--text-strong) 50%,transparent 50%)",
      backgroundPosition: "calc(100% - 18px) 50%, calc(100% - 12px) 50%",
      backgroundSize: "6px 6px",
      backgroundRepeat: "no-repeat",
      ...style
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontSize: "var(--fs-small)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 22,
      border: "1px solid var(--border-rule)",
      background: checked ? "var(--verde-baoba)" : "var(--papel-sombra)",
      display: "flex",
      alignItems: "center",
      padding: 2,
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      background: "var(--papel-claro)",
      border: "1px solid var(--border-rule)",
      transform: checked ? "translateX(22px)" : "none",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  invalid = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    style: {
      ...{
        width: "100%",
        font: "inherit",
        fontSize: "var(--fs-small)",
        color: "var(--text-strong)",
        background: "var(--papel-claro)",
        border: "1px solid var(--border-rule)",
        borderRadius: "var(--radius-none)",
        padding: "11px 13px",
        outlineOffset: "2px"
      },
      resize: "vertical",
      lineHeight: "var(--lh-body)",
      borderColor: invalid ? "var(--status-danger)" : "var(--border-rule)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  items = [],
  active,
  onNavigate,
  action,
  tone = "ink",
  assetBase = "/assets/logo",
  style,
  ...rest
}) {
  const dark = tone === "paper";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-4) var(--gutter)",
      background: dark ? "var(--preto-grafite)" : "var(--papel)",
      borderBottom: "1px solid " + (dark ? "var(--border-inverse)" : "var(--border-rule)"),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "wordmark",
    width: 168,
    tone: dark ? "paper" : "ink",
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, items.map(i => {
    const k = i.value || i,
      l = i.label || i;
    return /*#__PURE__*/React.createElement("a", {
      key: k,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(k);
      },
      style: {
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        textDecoration: "none",
        color: k === active ? "var(--terracota-queimada)" : dark ? "var(--papel)" : "var(--text-strong)"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", null, action));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  tone = "ink",
  style,
  ...rest
}) {
  const dark = tone === "paper";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid " + (dark ? "var(--border-inverse)" : "var(--border-hairline)"),
      ...style
    }
  }, rest), items.map(it => {
    const k = it.value || it,
      l = it.label || it,
      on = k === value;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(k),
      style: {
        font: "inherit",
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        background: "none",
        border: 0,
        borderBottom: "3px solid " + (on ? "var(--terracota-queimada)" : "transparent"),
        color: on ? dark ? "var(--papel)" : "var(--text-strong)" : dark ? "var(--text-on-inverse-muted)" : "var(--text-muted)",
        padding: "0 0 12px",
        cursor: "pointer",
        marginBottom: -1
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/screens.jsx
try { (() => {
const NS = window.BongarbitDesignSystem_1a89f9;
const {
  Logo,
  Frame,
  Button,
  Badge,
  Tag,
  Card,
  Divider,
  Eyebrow,
  NavBar,
  Tabs,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Callout,
  Dialog,
  Tooltip
} = NS;
const A = {
  logo: "../../assets/logo",
  bg: "../../assets/backgrounds",
  ill: "../../assets/illustrations"
};
const container = {
  maxWidth: "var(--container-wide)",
  margin: "0 auto",
  padding: "0 var(--gutter)"
};
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: `var(--papel) url(${A.bg}/paper-texture.png) center/cover`,
      borderBottom: "1px solid var(--border-rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      position: "relative",
      padding: "var(--space-10) var(--gutter) var(--space-9)",
      maxWidth: 1320,
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,46%)",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Quilombo da Xamb\xE1 \xB7 Olinda, PE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-display)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-display)"
    }
  }, "Onde a ancestralidade encontra o futuro."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lead)",
      color: "var(--text-body)",
      maxWidth: "28em",
      margin: 0
    }
  }, "Uma escola de luteria org\xE2nica e digital. Madeira, caba\xE7a e circuito na mesma linguagem \u2014 porque a tecnologia n\xE3o chega de fora: ela j\xE1 existe na comunidade."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onCta
  }, "Inscreva-se"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Conhe\xE7a o projeto"))), /*#__PURE__*/React.createElement("img", {
    src: `${A.ill}/ilustracao-baoba.png`,
    alt: "",
    style: {
      width: "100%",
      maxWidth: 720,
      justifySelf: "end",
      alignSelf: "end",
      marginBottom: "calc(var(--space-9) * -1)",
      display: "block",
      pointerEvents: "none"
    }
  })));
}
function Pillars() {
  const items = [["Raiz", "Circuitos eletrônicos desenhados como sistema radicular do território."], ["Território", "A forma do Rio Beberibe traduzida em malha de placa."], ["Gambiarra", "Relés viram caixas d’água; capacitores viram tonéis e bombas."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...container,
      padding: "var(--space-9) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Conceito de marca"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-5)"
    }
  }, items.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: "var(--rule-thick) solid var(--preto-grafite)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-bold)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-body)",
      marginTop: "var(--space-2)"
    }
  }, d)))));
}
const OFICINAS = [{
  id: 1,
  cat: "Luteria",
  title: "Cabaça e circuito",
  meta: "4 sábados · 9h–13h",
  img: "cabaca",
  desc: "Construa um instrumento híbrido do zero, da cabaça ao sensor.",
  status: ["success", "Inscrições abertas"]
}, {
  id: 2,
  cat: "Eletrônica",
  title: "Gambiarra sonora",
  meta: "6 encontros · quartas",
  img: "capacitores",
  desc: "Osciladores, resistores e reaproveitamento de componentes.",
  status: ["warning", "Últimas vagas"]
}, {
  id: 3,
  cat: "Percussão",
  title: "Som do terreiro",
  meta: "Residência · 3 meses",
  img: "casas",
  desc: "Pesquisa em percussão e luteria digital com mestres da Xambá.",
  status: ["info", "Turma 02"]
}];
function OficinaGrid({
  filter,
  onOpen
}) {
  const list = filter === "Tudo" ? OFICINAS : OFICINAS.filter(o => o.cat === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-5)"
    }
  }, list.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.id,
    eyebrow: o.cat,
    title: o.title,
    meta: o.meta,
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        height: 180,
        background: "var(--papel-sombra)",
        display: "grid",
        placeItems: "center",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${A.ill}/${o.img}.png`,
      alt: "",
      style: {
        maxWidth: "88%",
        maxHeight: "88%",
        objectFit: "contain"
      }
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", null, o.desc), /*#__PURE__*/React.createElement(Badge, {
    tone: o.status[0]
  }, o.status[1]), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    fullWidth: true,
    onClick: () => onOpen(o)
  }, "Ver oficina")))));
}
function HomeScreen({
  go
}) {
  const [filter, setFilter] = React.useState("Tudo");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onCta: () => go("inscricao")
  }), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      padding: "var(--space-9) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A.logo}/symbol.png`,
    alt: "",
    style: {
      width: 170,
      flex: "0 0 170px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-heading)",
      fontWeight: "var(--fw-bold)",
      margin: 0,
      color: "var(--papel)",
      maxWidth: "16em"
    }
  }, "Inova\xE7\xE3o tamb\xE9m pode nascer do afeto, da coletividade e da identidade cultural."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...container,
      padding: "var(--space-9) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Programa\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      marginTop: "var(--space-2)"
    }
  }, "Oficinas abertas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, ["Tudo", "Luteria", "Eletrônica", "Percussão"].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: filter === c,
    onClick: () => setFilter(c)
  }, c)))), /*#__PURE__*/React.createElement(OficinaGrid, {
    filter: filter,
    onOpen: () => go("inscricao")
  })), /*#__PURE__*/React.createElement(SiteFooter, null));
}
function OficinasScreen({
  go
}) {
  const [tab, setTab] = React.useState("Oficinas");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...container,
      padding: "var(--space-8) var(--gutter) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Programa\xE7\xE3o 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h1)",
      marginTop: "var(--space-2)",
      maxWidth: "14em"
    }
  }, "O territ\xF3rio j\xE1 \xE9 um circuito vivo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lead)",
      color: "var(--text-body)",
      maxWidth: "34em",
      marginTop: "var(--space-4)"
    }
  }, "Todas as turmas acontecem no terreiro da Xamb\xE1, com vagas priorit\xE1rias para moradores do territ\xF3rio.")), /*#__PURE__*/React.createElement("section", {
    style: {
      ...container,
      padding: "0 var(--gutter) var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["Oficinas", "Residências", "Acervo"],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: "var(--space-6)"
    }
  }), tab === "Oficinas" && /*#__PURE__*/React.createElement(OficinaGrid, {
    filter: "Tudo",
    onOpen: () => go("inscricao")
  }), tab === "Residências" && /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: "Em breve"
  }, "O edital de resid\xEAncias 2026 \xE9 publicado em setembro."), tab === "Acervo" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-4)"
    }
  }, ["placa-circuito", "casinhas", "espada-sao-jorge", "capacitores"].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      border: "1px solid var(--border-rule)",
      boxShadow: "var(--shadow-print)",
      background: "var(--papel-claro)",
      height: 200,
      display: "grid",
      placeItems: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A.ill}/${n}.png`,
    alt: "",
    style: {
      maxWidth: "86%",
      maxHeight: "86%",
      objectFit: "contain"
    }
  }))))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
function InscricaoScreen({
  go
}) {
  const [sent, setSent] = React.useState(false);
  const [nome, setNome] = React.useState("");
  const [turno, setTurno] = React.useState("manha");
  const [ok, setOk] = React.useState(false);
  const [avisos, setAvisos] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...container,
      padding: "var(--space-8) var(--gutter) var(--space-9)",
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Inscri\xE7\xE3o"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h1)",
      marginTop: "var(--space-2)"
    }
  }, "Caba\xE7a e circuito"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lead)",
      color: "var(--text-body)",
      marginTop: "var(--space-4)",
      maxWidth: "30em"
    }
  }, "Quatro s\xE1bados no terreiro. Voc\xEA sai com um instrumento h\xEDbrido constru\xEDdo por voc\xEA, da caba\xE7a ao sensor."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Inscri\xE7\xF5es abertas"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "20 vagas")), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "var(--space-6) 0"
    }
  }), /*#__PURE__*/React.createElement("form", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome completo",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: nome,
    onChange: e => setNome(e.target.value),
    placeholder: "Maria da Xamb\xE1"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    required: true,
    hint: "Usamos s\xF3 para a inscri\xE7\xE3o."
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "voce@exemplo.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Oficina"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["Cabaça e circuito", "Gambiarra sonora", "Som do terreiro"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Bairro"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "S\xE3o Benedito, Olinda"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Por que quer participar?",
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "Escreva em poucas linhas"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "turno",
    checked: turno === "manha",
    onChange: () => setTurno("manha"),
    label: "Manh\xE3"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "turno",
    checked: turno === "tarde",
    onChange: () => setTurno("tarde"),
    label: "Tarde"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: ok,
    onChange: setOk,
    label: "Li e aceito o regulamento"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: avisos,
    onChange: setAvisos,
    label: "Receber avisos das pr\xF3ximas turmas"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    type: "submit",
    disabled: !ok
  }, "Enviar inscri\xE7\xE3o"), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Baixar edital em PDF"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost"
  }, "Edital"))))), /*#__PURE__*/React.createElement(Frame, {
    assetBase: A.bg,
    padding: "var(--space-6)",
    style: {
      position: "sticky",
      top: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Como funciona"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "var(--space-4) 0 0",
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, [["01", "Encontro no terreiro", "Sábados, 9h às 13h, na sede da Xambá."], ["02", "Materiais inclusos", "Cabaça, madeira e componentes fornecidos."], ["03", "Instrumento seu", "Você leva o que construiu."]].map(([n, t, d]) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-black)",
      color: "var(--terracota-queimada)"
    }
  }, n), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: "var(--fs-small)"
    }
  }, t), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-body)"
    }
  }, d))))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "var(--space-5) 0"
    }
  }), /*#__PURE__*/React.createElement(Callout, {
    tone: "warning",
    title: "Vagas limitadas"
  }, "20 pessoas por turma, com prioridade para moradores do territ\xF3rio."))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    title: "Inscri\xE7\xE3o enviada",
    onClose: () => setSent(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => setSent(false)
    }, "Fechar"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        setSent(false);
        go("home");
      }
    }, "Voltar ao in\xEDcio"))
  }, nome ? `Obrigado, ${nome}. ` : "", "Voc\xEA recebe a confirma\xE7\xE3o por e-mail em at\xE9 3 dias \xFAteis."), /*#__PURE__*/React.createElement(SiteFooter, null));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--verde-musgo)",
      color: "var(--papel)",
      padding: "var(--space-8) 0 var(--space-6)",
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A.logo}/wordmark-tagline-negativo.png`,
    alt: "Bongarbit",
    style: {
      width: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      fontSize: "var(--fs-small)"
    }
  }, [["Programação", ["Oficinas", "Residências", "Acervo"]], ["Projeto", ["Sobre", "Equipe", "Manual de marca"]], ["Contato", ["bongarbit.org", "@bongarbit"]]].map(([t, ls]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-micro)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--amarelo-ocre)"
    }
  }, t), ls.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      color: "var(--text-on-inverse-muted)"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      marginTop: "var(--space-7)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-inverse)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-on-inverse-muted)"
    }
  }, "Escola de Luteria Org\xE2nica e Digital da Xamb\xE1 \xB7 Olinda, Pernambuco"));
}
function SiteApp() {
  const [route, setRoute] = React.useState("home");
  const nav = [{
    value: "home",
    label: "Início"
  }, {
    value: "oficinas",
    label: "Oficinas"
  }, {
    value: "inscricao",
    label: "Inscrição"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--papel)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    assetBase: A.logo,
    items: nav,
    active: route,
    onNavigate: setRoute,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setRoute("inscricao")
    }, "Inscreva-se")
  }), route === "home" && /*#__PURE__*/React.createElement(HomeScreen, {
    go: setRoute
  }), route === "oficinas" && /*#__PURE__*/React.createElement(OficinasScreen, {
    go: setRoute
  }), route === "inscricao" && /*#__PURE__*/React.createElement(InscricaoScreen, {
    go: setRoute
  }));
}
Object.assign(window, {
  SiteApp,
  HomeScreen,
  OficinasScreen,
  InscricaoScreen,
  SiteFooter,
  Hero,
  Pillars,
  OficinaGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Frame = __ds_scope.Frame;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
