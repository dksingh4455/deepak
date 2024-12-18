import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Topbar from "@/Components/Topbar"
import Pagination from "@/Components/pagination "
import Card from "@/Components/card";
import Cardimg from "@/Components/cardimg";
import Counter from "@/Components/counter"
import Services from "@/Components/services";
import Choose from "@/Components/choose";
import Cardsnew from "@/Components/cardsnew";
import CLient from "@/Components/client"
import Footer from "@/Components/footer";
import Review from "@/Components/review"
import Servicecard from "@/Components/servicecard";
export default function Home() {
  return (
    <>
  
     
     <div className=" ">
   
      <Pagination totalPages={10} />
    </div>
     <Navbar/>
    <Card/>
     <Cardimg/>
     <Counter/>
     <div className="py-[30px]">
     <Services/>
     </div>
    <div className="py-[20px]">
    <Servicecard/>
    </div>
    
     <Choose/>
     <Cardsnew/>
     <CLient/>
     <Review/>
     
    </>
  );
}
