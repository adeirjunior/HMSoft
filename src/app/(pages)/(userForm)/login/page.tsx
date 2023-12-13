export default function Login() {
  return (
    <>
      <div>Login</div>
      <div className="flex flex-col gap-4">
        {(() => {
          const arr = [];
          for (let i = 0; i < 10; i++) {
            arr.push(
              <div key={i} className="border w-40 h-40 bg-slate-800"></div>
            );
          }
          return arr;
        })()}
      </div>
    </>
  );
}
