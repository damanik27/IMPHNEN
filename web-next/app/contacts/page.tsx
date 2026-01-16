import ContactTable from "../components/contact-table";

const Contact = () => {
    return (
        <div className="max-w-screen-md mx-auto p-5">
        <div className="flex items-center justify-between gap-1 mb-5"></div>    
        <ContactTable/> 
        </div>
    );
};
export default Contact;