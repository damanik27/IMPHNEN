import ContactTable from "../components/contact-table";
import Search from "../components/search";
import { CreateButton } from "@/app/components/buttons"

const Contact = () => {
  return (
    <div className="max-w-screen-md mx-auto p-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
         <CreateButton />
      </div>

      <ContactTable />
    </div>
  );
};

export default Contact;
