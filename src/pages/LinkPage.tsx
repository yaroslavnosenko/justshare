import QRCode from 'react-qr-code'

export const LinkPage = () => {
  // localStorage.setItem('HELLO', 'HELLO')
  const a = localStorage.getItem('HELLO')
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-12 lg:pt-24">
          <div className="flex justify-center mb-8">
            <QRCode
              value="https://blog.expo.dev/enabling-ios-splash-screens-for-progressive-web-apps-34f06f096e5c"
              bgColor="balck"
              fgColor="white"
            />
          </div>
          <h1 className="font-bold text-3xl leading-tight">{a}</h1>
          <p className="opacity-60 pt-2">Here you can see your saved links</p>
        </div>
      </div>
    </div>
  )
}
