/* @ds-bundle: {"format":4,"namespace":"FedericoStefanDesignSystem_704060","components":[{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CaseStudyHero","sourcePath":"components/editorial/CaseStudyHero.jsx"},{"name":"ImageFrame","sourcePath":"components/editorial/ImageFrame.jsx"},{"name":"MetaLine","sourcePath":"components/editorial/MetaLine.jsx"},{"name":"ProjectEntry","sourcePath":"components/editorial/ProjectEntry.jsx"},{"name":"ProjectNumber","sourcePath":"components/editorial/ProjectNumber.jsx"},{"name":"Pullquote","sourcePath":"components/editorial/Pullquote.jsx"},{"name":"SectionHeading","sourcePath":"components/editorial/SectionHeading.jsx"},{"name":"Button","sourcePath":"components/navigation/Button.jsx"},{"name":"NextProject","sourcePath":"components/navigation/NextProject.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"TextLink","sourcePath":"components/navigation/TextLink.jsx"}],"sourceHashes":{"components/core/Input.jsx":"c4bcddceeee3","components/core/Tag.jsx":"da3860e8ca34","components/editorial/CaseStudyHero.jsx":"c842ee110c7b","components/editorial/ImageFrame.jsx":"fb5ae2b078d2","components/editorial/MetaLine.jsx":"851e004674f3","components/editorial/ProjectEntry.jsx":"64b5c4fa9dc7","components/editorial/ProjectNumber.jsx":"09e995016a09","components/editorial/Pullquote.jsx":"13a3423e61b2","components/editorial/SectionHeading.jsx":"1254e3a803fe","components/navigation/Button.jsx":"5046d096e22b","components/navigation/NextProject.jsx":"e21dfb9521cb","components/navigation/SiteFooter.jsx":"31b7910fe43e","components/navigation/SiteHeader.jsx":"2900f24b1b83","components/navigation/TextLink.jsx":"e5d37778aec7","ui_kits/portfolio/AboutScreen.jsx":"4fad0383df90","ui_kits/portfolio/App.jsx":"9bed7d3f96b2","ui_kits/portfolio/CaseStudyScreen.jsx":"cf29c5162144","ui_kits/portfolio/HomeScreen.jsx":"eaeb25e467a5","ui_kits/portfolio/data.jsx":"65b2b58a6d8a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FedericoStefanDesignSystem_704060 = window.FedericoStefanDesignSystem_704060 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  placeholder,
  value,
  onChange,
  multiline = false,
  type = 'text',
  error
}) {
  const [f, setF] = useState(false);
  const El = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: f ? 'var(--accent)' : 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement(El, {
    type: multiline ? undefined : type,
    rows: multiline ? 4 : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-body-lg)',
      color: 'var(--text-primary)',
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid ' + (error ? '#A5483B' : f ? 'var(--accent)' : 'var(--border-default)'),
      borderRadius: 0,
      padding: '8px 0 12px',
      outline: 'none',
      resize: 'vertical'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-small)',
      color: '#A5483B'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-small)',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (selected ? 'var(--accent)' : 'var(--border-default)'),
      background: selected ? 'var(--accent-subtle)' : 'transparent',
      color: selected ? 'var(--accent-hover)' : 'var(--text-secondary)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ImageFrame.jsx
try { (() => {
function ImageFrame({
  src,
  alt = '',
  ratio = '16 / 10',
  label,
  zoom = false,
  fit = 'cover',
  background,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: ratio,
      background: background || 'var(--image-placeholder)',
      width: '100%',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      transform: zoom ? 'scale(var(--hover-image-scale))' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 16,
      transform: zoom ? 'scale(var(--hover-image-scale))' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, label || 'Project image')));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/editorial/MetaLine.jsx
try { (() => {
function MetaLine({
  items = [],
  accent = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0 10px',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      lineHeight: 'var(--lh-micro)',
      color: accent ? 'var(--accent)' : 'var(--text-secondary)',
      transition: 'color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { MetaLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/MetaLine.jsx", error: String((e && e.message) || e) }); }

// components/editorial/CaseStudyHero.jsx
try { (() => {
function CaseStudyHero({
  number,
  title,
  intro,
  facts = [],
  image,
  imageLabel,
  accent
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-11)',
      '--project-accent': accent || 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0,1fr))',
      columnGap: 'var(--grid-gutter)',
      rowGap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--project-accent)'
    }
  }), number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, number)), /*#__PURE__*/React.createElement("h1", {
    style: {
      gridColumn: '1 / -1',
      fontSize: 'var(--type-display-xl)',
      lineHeight: 'var(--lh-display-xl)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1 / span 7',
      fontSize: 'var(--type-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      maxWidth: '30em'
    }
  }, intro), /*#__PURE__*/React.createElement("dl", {
    style: {
      gridColumn: '9 / span 4',
      margin: 0,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5) var(--grid-gutter)'
    }
  }, facts.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: 'var(--type-small)',
      lineHeight: 'var(--lh-small)'
    }
  }, v))))), /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: image,
    label: imageLabel || title + ' — hero',
    ratio: "16 / 8"
  }));
}
Object.assign(__ds_scope, { CaseStudyHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/CaseStudyHero.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ProjectNumber.jsx
try { (() => {
function ProjectNumber({
  index,
  total,
  style
}) {
  const pad = n => String(n).padStart(2, '0');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-micro)',
      lineHeight: 1,
      color: 'var(--text-muted)',
      letterSpacing: '0.02em',
      ...style
    }
  }, pad(index), total ? ' / ' + pad(total) : '');
}
Object.assign(__ds_scope, { ProjectNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ProjectNumber.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ProjectEntry.jsx
try { (() => {
const {
  useState
} = React;
function ProjectEntry({
  index,
  total,
  title,
  description,
  meta = [],
  image,
  imageLabel,
  ratio = '16 / 10',
  layout = 'right',
  href,
  onClick
}) {
  const [h, setH] = useState(false);
  const flip = layout === 'left';
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: flip ? '9 / span 4' : '1 / span 5',
      gridRow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProjectNumber, {
    index: index,
    total: total
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--type-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 500,
      transform: h ? 'translateX(var(--hover-shift))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)',
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.25em'
    }
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '0.45em',
      fontWeight: 400,
      opacity: h ? 1 : 0,
      transform: h ? 'none' : 'translateX(-8px)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--text-primary)',
      maxWidth: '26em'
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.MetaLine, {
    items: meta,
    accent: h
  }));
  const img = /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: flip ? '1 / span 8' : '6 / span 7',
      gridRow: 1,
      marginTop: flip ? 0 : 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: image,
    label: imageLabel || title,
    ratio: ratio,
    zoom: h
  }));
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0,1fr))',
      columnGap: 'var(--grid-gutter)',
      color: 'inherit',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, text, img);
}
Object.assign(__ds_scope, { ProjectEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ProjectEntry.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Pullquote.jsx
try { (() => {
function Pullquote({
  children,
  cite
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0,1fr))',
      columnGap: 'var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      gridColumn: '3 / span 9',
      margin: 0,
      fontSize: 'var(--type-h2)',
      lineHeight: 'var(--lh-h2)',
      letterSpacing: 'var(--tracking-heading)',
      fontWeight: 400
    }
  }, children), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      gridColumn: '3 / span 9',
      marginTop: 'var(--space-5)',
      fontSize: 'var(--type-small)',
      color: 'var(--text-secondary)',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      borderTop: '1px solid var(--project-accent, var(--accent))'
    }
  }), cite));
}
Object.assign(__ds_scope, { Pullquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Pullquote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionHeading.jsx
try { (() => {
function SectionHeading({
  number,
  label,
  title,
  intro,
  size = 'h1'
}) {
  const fs = {
    display: 'var(--type-display)',
    h1: 'var(--type-h1)',
    h2: 'var(--type-h2)'
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0,1fr))',
      columnGap: 'var(--grid-gutter)',
      borderTop: '1px solid var(--border-strong)',
      paddingTop: 'var(--space-5)',
      rowGap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / span 3',
      display: 'flex',
      gap: 'var(--space-3)',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)',
      letterSpacing: 0
    }
  }, number), label && /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '4 / span 9',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-heading)',
      fontWeight: 500
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '32em'
    }
  }, intro)));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow,
  disabled,
  onClick,
  type = 'button',
  href
}) {
  const [h, setH] = useState(false);
  const pad = size === 'sm' ? '10px 16px' : '16px 24px';
  const v = {
    primary: {
      bg: h ? 'var(--fs-sage-dark)' : 'var(--fs-ink)',
      fg: 'var(--fs-paper)',
      bd: 'transparent'
    },
    secondary: {
      bg: 'transparent',
      fg: h ? 'var(--accent)' : 'var(--text-primary)',
      bd: h ? 'var(--accent)' : 'var(--border-strong)'
    },
    ghost: {
      bg: h ? 'var(--bg-surface)' : 'transparent',
      fg: 'var(--text-primary)',
      bd: 'transparent'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: pad,
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      fontWeight: 500,
      letterSpacing: '-0.005em',
      lineHeight: 1,
      background: v.bg,
      color: v.fg,
      border: '1px solid ' + v.bd,
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.35 : 1,
      textDecoration: 'none',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: h && !disabled ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Button.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NextProject.jsx
try { (() => {
const {
  useState
} = React;
function NextProject({
  title,
  number,
  onClick,
  href = '#'
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      borderTop: '1px solid var(--border-strong)',
      paddingTop: 'var(--space-5)',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--type-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: h ? 'var(--accent)' : 'var(--text-secondary)',
      transition: 'color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Next project"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      letterSpacing: 0
    }
  }, number)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-display-xl)',
      lineHeight: 'var(--lh-display-xl)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.2em',
      transform: h ? 'translateX(var(--hover-shift))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.4em',
      opacity: h ? 1 : 0.25,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { NextProject });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NextProject.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  name = 'Federico Stefan',
  role = 'UX/UI Designer',
  links = ['Work', 'About', 'Contact'],
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'color-mix(in srgb, var(--bg-page) 85%, transparent)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0,1fr))',
      columnGap: 'var(--grid-gutter)',
      alignItems: 'center',
      height: 'var(--header-height)',
      padding: '0 var(--grid-margin)',
      maxWidth: 'calc(var(--content-max) + 2 * var(--grid-margin))',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]);
    },
    style: {
      gridColumn: '1 / span 3',
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      gridColumn: '4 / span 4',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, role), /*#__PURE__*/React.createElement("nav", {
    style: {
      gridColumn: '8 / span 5',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      fontSize: 13,
      color: active === l ? 'var(--accent)' : 'var(--text-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, active === l && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), l)))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TextLink.jsx
try { (() => {
const {
  useState
} = React;
function TextLink({
  children,
  href = '#',
  arrow,
  size = 'body',
  muted = false,
  onClick,
  external
}) {
  const [h, setH] = useState(false);
  const g = external ? '↗' : arrow === true ? '→' : arrow;
  const fs = {
    small: 'var(--type-small)',
    body: 'var(--type-body)',
    large: 'var(--type-body-lg)'
  }[size];
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer' : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.35em',
      fontSize: fs,
      color: h ? 'var(--accent)' : muted ? 'var(--text-secondary)' : 'var(--text-primary)',
      textDecoration: 'none',
      position: 'relative',
      paddingBottom: 2,
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", null, children), g && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: h ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, g), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 1,
      width: '100%',
      background: 'currentColor',
      transform: h ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  statement = "Let's work together.",
  email = 'hello@federicostefan.com',
  links = [['LinkedIn', '#'], ['Dribbble', '#']],
  year = 2026,
  name = 'Federico Stefan'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'var(--space-12) var(--grid-margin) var(--space-6)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0,1fr))',
      columnGap: 'var(--grid-gutter)',
      rowGap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      gridColumn: '1 / span 8',
      fontSize: 'var(--type-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 500
    }
  }, statement), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: 'mailto:' + email,
    size: "large",
    arrow: true
  }, email), links.map(([l, h]) => /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    key: l,
    href: h,
    external: true,
    muted: true
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " ", name), /*#__PURE__*/React.createElement("span", null, "Designed and built by ", name.split(' ')[0]))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
function AboutScreen() {
  const {
    SectionHeading,
    ImageFrame,
    MetaLine,
    Input,
    Button,
    Tag
  } = window.FedericoStefanDesignSystem_704060;
  return /*#__PURE__*/React.createElement("main", {
    className: "fs-container",
    style: {
      paddingTop: 'var(--space-12)',
      paddingBottom: 'var(--section-gap)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "fs-grid",
    style: {
      rowGap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      gridColumn: '1 / span 9',
      fontSize: 'var(--type-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 500
    }
  }, "[About statement from extracted content.]"), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / span 4'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4 / 5",
    label: "Portrait"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '6 / span 6',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-body-lg)',
      lineHeight: 'var(--lh-body-lg)'
    }
  }, "[Bio paragraph from extracted content.]"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['UX research', 'Interface design', 'Prototyping', 'Design systems'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "01",
    label: "Contact",
    title: "Start a conversation"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs-grid"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      gridColumn: '4 / span 7',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@studio.com"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "Tell me about the project",
    multiline: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    arrow: true
  }, "Send message"))))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
function PortfolioApp() {
  const {
    SiteHeader,
    SiteFooter
  } = window.FedericoStefanDesignSystem_704060;
  const [route, setRoute] = React.useState(() => JSON.parse(localStorage.getItem('fs-route') || '{"page":"Work"}'));
  const go = r => {
    setRoute(r);
    localStorage.setItem('fs-route', JSON.stringify(r));
    window.scrollTo(0, 0);
  };
  const nav = l => go({
    page: l === 'Contact' ? 'About' : l
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: route.page === 'Case' ? 'Work' : route.page,
    onNavigate: nav
  }), route.page === 'Work' && /*#__PURE__*/React.createElement(HomeScreen, {
    onOpen: s => go({
      page: 'Case',
      slug: s
    })
  }), route.page === 'Case' && /*#__PURE__*/React.createElement(CaseStudyScreen, {
    slug: route.slug,
    onOpen: s => go({
      page: 'Case',
      slug: s
    }),
    onBack: () => go({
      page: 'Work'
    })
  }), route.page === 'About' && /*#__PURE__*/React.createElement(AboutScreen, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(PortfolioApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyScreen.jsx
try { (() => {
function CaseStudyScreen({
  slug,
  onOpen,
  onBack
}) {
  const {
    CaseStudyHero,
    SectionHeading,
    ImageFrame,
    Pullquote,
    NextProject,
    TextLink
  } = window.FedericoStefanDesignSystem_704060;
  const P = window.portfolioProjects;
  const i = P.findIndex(p => p.slug === slug);
  const p = P[i];
  const next = P[(i + 1) % P.length];
  const pad = n => String(n).padStart(2, '0');
  return /*#__PURE__*/React.createElement("main", {
    style: {
      '--project-accent': p.accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-container",
    style: {
      paddingTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    arrow: "\u2190",
    size: "small",
    muted: true,
    onClick: e => {
      e.preventDefault();
      onBack();
    }
  }, "All work")), /*#__PURE__*/React.createElement(CaseStudyHero, {
    number: pad(i + 1) + ' / ' + pad(P.length),
    title: p.title,
    intro: p.description,
    facts: p.facts,
    accent: p.accent
  })), /*#__PURE__*/React.createElement("div", {
    className: "fs-container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--section-gap)',
      padding: 'var(--section-gap) var(--grid-margin)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "01",
    label: "Context",
    title: "The problem",
    intro: "[Problem statement from extracted content.]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs-grid",
    style: {
      rowGap: 'var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / span 7'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4 / 3",
    label: "Screen \u2014 desktop"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / span 5',
      marginTop: 'var(--space-13)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "3 / 4",
    label: "Screen \u2014 mobile"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '8 / span 5',
      fontSize: 'var(--type-small)',
      color: 'var(--text-secondary)'
    }
  }, "Fig. 01 \u2014 [Caption]")), /*#__PURE__*/React.createElement(SectionHeading, {
    number: "02",
    label: "Research",
    title: "What we learned",
    intro: "[Research summary from extracted content.]"
  }), /*#__PURE__*/React.createElement(Pullquote, {
    cite: "[Source]"
  }, "[Key insight or user quote.]"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 calc(-1 * var(--grid-margin))'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "21 / 9",
    label: "Full-bleed \u2014 key screens composition"
  })), /*#__PURE__*/React.createElement(SectionHeading, {
    number: "03",
    label: "Outcome",
    title: "The result",
    intro: "[Outcome from extracted content.]"
  }), /*#__PURE__*/React.createElement(NextProject, {
    title: next.title,
    number: pad((i + 1) % P.length + 1) + ' / ' + pad(P.length),
    onClick: e => {
      e.preventDefault();
      onOpen(next.slug);
    }
  })));
}
window.CaseStudyScreen = CaseStudyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onOpen
}) {
  const {
    ProjectEntry,
    MetaLine
  } = window.FedericoStefanDesignSystem_704060;
  const P = window.portfolioProjects;
  return /*#__PURE__*/React.createElement("main", {
    className: "fs-container",
    style: {
      paddingTop: 'var(--space-12)',
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "fs-grid",
    style: {
      rowGap: 'var(--space-6)',
      marginBottom: 'var(--space-13)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1 / span 7',
      fontSize: 'var(--type-h2)',
      lineHeight: 'var(--lh-h2)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, "Federico Stefan is a UX/UI designer shaping digital products from research to interface."), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / span 4',
      alignSelf: 'end',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    items: ['Selected work', String(P.length).padStart(2, '0') + ' projects']
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\u2193"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--entry-gap)'
    }
  }, P.map((p, i) => /*#__PURE__*/React.createElement(ProjectEntry, {
    key: p.slug,
    index: i + 1,
    total: P.length,
    title: p.title,
    description: p.description,
    meta: p.meta,
    layout: i % 2 ? 'left' : 'right',
    onClick: e => {
      e.preventDefault();
      onOpen(p.slug);
    }
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.jsx
try { (() => {
// Placeholder content — replace with the extracted portfolio content (source of truth).
const portfolioProjects = [{
  slug: 'collab',
  title: 'Collab.',
  description: 'Web platform designed to connect project owners with the right collaborators.',
  meta: ['UX/UI Design', '2026'],
  accent: '#C8734A',
  facts: [['Role', 'UX/UI Design'], ['Year', '2026'], ['Type', 'Web platform'], ['Scope', 'Research, IA, UI']]
}, {
  slug: 'nordstern',
  title: 'Nordstern',
  description: '[One-line project description from extracted content]',
  meta: ['UX/UI Design', 'Product'],
  accent: '#3C4A6B',
  facts: [['Role', 'UX/UI Design'], ['Year', '—'], ['Type', 'AI product'], ['Scope', '—']]
}];
window.portfolioProjects = portfolioProjects;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CaseStudyHero = __ds_scope.CaseStudyHero;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.MetaLine = __ds_scope.MetaLine;

__ds_ns.ProjectEntry = __ds_scope.ProjectEntry;

__ds_ns.ProjectNumber = __ds_scope.ProjectNumber;

__ds_ns.Pullquote = __ds_scope.Pullquote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.NextProject = __ds_scope.NextProject;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.TextLink = __ds_scope.TextLink;

})();
