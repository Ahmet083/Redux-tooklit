import { useSelector } from "react-redux";


function UserShow () {
const userState = useSelector(state => state.user)

return (
    <div>
    <strong>Isim:</strong> {userState.firsname}
    <br />
    <strong>Soyisim:</strong> {userState.lastname}
    <br />
    <strong>Yas:</strong> {userState.age}
    </div>
)
}

export default UserShow