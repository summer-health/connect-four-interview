import ConnectFour from "@/components/connect-four"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Connect Four</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">Technical Interview Challenge</p>
        <ConnectFour />
      </div>
    </main>
  )
}

