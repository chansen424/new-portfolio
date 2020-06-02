export default function CenterLeft({ children }) {
  return (
    <>
      <div className="center">
        <div className="left">
          {children}
        </div>
      </div>

      <style jsx>
        {`
        .center {
          display: inline-block;
          text-align: center;
        }

        .left {
          display: inline-block;
          text-align: left;
        }
      
      `}
      </style>
    </>
  )
}