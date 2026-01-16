const ContactTable = () => {
    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead  className="text-sm text-gray-700 uppercase bg-amber-50">
                <tr>
                    <th className="py-3 px-6">Name</th>   
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Phone</th>
                    <th className="py-3 px-6">Actions</th>
                    <th className="py-3 px-6">Created at</th>                </tr>
            </thead>
            <tbody>
                <td className="py-3 px-6 "></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6"></td>
            </tbody>
        </table>
    );
};
export default ContactTable;