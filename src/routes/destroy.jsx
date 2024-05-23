import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    throw new Error("aw fuck! i cant believe you've done this")
    await deleteContact(params.contactId);
    return redirect("/");
}

export default deleteContact