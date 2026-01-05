import Button from "../Components/Button";
import FormInput from "../Components/FormInput";

function AddAdmin()
{
    return(
        <>
        <h3>Add New Admin</h3>
        <div>
            <div className="row">
                <div className="col">
                <label htmlFor="">Name</label>
                <FormInput type="text"/>
                </div>
                <div className="col">
                <label htmlFor="">Email</label>
                <FormInput type="email"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label htmlFor="">Phone</label>
                <FormInput type="number"/>
                </div>
                <div className="col">
                <label htmlFor="">Select</label>
                <select className="form-select">
                    <option value="">--Select Department--</option>
                    <option value="">CSE</option>
                    <option value="">IT</option>
                    <option value="">AIDS</option>
                </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label htmlFor="">Enter New Password</label>
                <FormInput type="text"/>
                </div>
                <div className="col">
                <label htmlFor="">Confirm Password</label>
                <FormInput type="email"/>
                </div>
            </div>
            <Button btnlabel="Submit" btnclass="btn-primary"/>
        </div> 
        </>
    );
}
export default AddAdmin;