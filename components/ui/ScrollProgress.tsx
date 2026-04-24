export default function ScrollProgress() {
  return (
    <div
      id="progress-bar"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 2,
        background: '#2b2bff',
        zIndex: 9997,
        transformOrigin: 'left',
        transform: 'scaleX(0)',
        width: '100%',
      }}
    />
  )
}
