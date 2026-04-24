export default function Cursor() {
  return (
    <>
      <div
        id="cursor-dot"
        aria-hidden="true"
        style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          width: 8,
          height: 8,
          background: '#0e0e0e',
        }}
      />
      <div
        id="cursor-ring"
        aria-hidden="true"
        style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          width: 38,
          height: 38,
          border: '1.5px solid rgba(14,14,14,0.4)',
          transition:
            'width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s',
        }}
      />
    </>
  )
}
