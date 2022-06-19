import Survey from '../Components/Survey'

const Profile = () => {
    return (
    <div className="adminAccess">
        <h1>Welcome, Admin</h1>
        <button className="create-btn" >Create Questionnaire</button>
        <Survey/>
    </div>
    )
   };
   export default Profile;