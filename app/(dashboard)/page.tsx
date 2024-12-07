export default function DashboardPage() {
    return (
      <div className="container grid items-center gap-8 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Welcome to the Dashboard
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            This is a simple dashboard with a responsive sidebar and navigation.
          </p>
        </div>
      </div>
    )
  }
  
  