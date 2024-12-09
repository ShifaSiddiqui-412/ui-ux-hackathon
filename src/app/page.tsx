
import Hero from "@/app/Components/Hero"
import ContactUs from "@/app/Components/Contactus"
import LoginForm from "@/app/Components/Login"
import Productlist from "@/app/Components/Product"
import Cart from "@/app/Components/Cart";

export default function Home() {
  return (
  <div>
<Hero />
<Productlist />
<LoginForm />
<ContactUs />
<Cart />
</div>
  );
}

