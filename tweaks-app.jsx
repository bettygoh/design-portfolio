// tweaks-app.jsx — drives the plain-HTML page via root attributes + CSS vars.
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "work": "grid",
  "motion": "orb",
  "accent": "#3A6DF0",
  "headFont": "Schibsted Grotesk"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const root = document.documentElement;

  useEffect(() => { root.setAttribute('data-work', t.work); }, [t.work]);
  useEffect(() => { root.setAttribute('data-motion', t.motion); }, [t.motion]);
  useEffect(() => { root.style.setProperty('--accent', t.accent); }, [t.accent]);
  useEffect(() => {
    root.style.setProperty('--font-head', `"${t.headFont}", system-ui, sans-serif`);
  }, [t.headFont]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Layout" />
      <TweakRadio label="Work" value={t.work}
        options={['list', 'cards', 'grid']}
        onChange={(v) => setTweak('work', v)} />
      <TweakRadio label="Hero motion" value={t.motion}
        options={['orb', 'lines', 'off']}
        onChange={(v) => setTweak('motion', v)} />

      <TweakSection label="Identity" />
      <TweakColor label="Accent" value={t.accent}
        options={['#3A6DF0', '#6FA088', '#C2855F', '#8488C4']}
        onChange={(v) => setTweak('accent', v)} />
      <TweakSelect label="Headline font" value={t.headFont}
        options={['Schibsted Grotesk', 'Hanken Grotesk', 'Space Grotesk']}
        onChange={(v) => setTweak('headFont', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<App />);
