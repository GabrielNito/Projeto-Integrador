import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LinksSection() {
  return (
    <section className="max-md:px-4 max-md:py-6 px-40 py-10 flex flex-col">
      <div>

        <Link to="/forum">
          <Button variant="link">Forum </Button>
        </Link>


        <Link to="/login">
          <Button variant="link">Login</Button>
        </Link>


        <Link to="/dashboard/geral">
          <Button variant="link">Dashboard</Button>
        </Link>

      </div>
    </section>
  )
}
