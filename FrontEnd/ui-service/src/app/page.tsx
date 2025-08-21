import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Search } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Vehicle Data Dashboard
        </h1>
        <div className="flex items-center gap-2">
          <Link href="/upload">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Upload New File
            </Button>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <form className="flex items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by Car Model..."
              className="pl-10 w-full"
            />
          </div>
          <Button type= "submit">Search</Button>
        </form>
      </div>

      {/* Data Table will go here later */}
      <div className="border rounded-lg p-8 text-center text-muted-foreground">
        <p>Vehicle data table will be displayed here...</p>
      </div>
    </main>
  );
}
