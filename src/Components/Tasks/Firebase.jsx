import React from "react";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseApp = initializeApp( {
  apiKey: "AIzaSyAXXopXlejW_mgYfv-2d_8IiXSlJBvvLeY",
  authDomain: "on-ipti.firebaseapp.com",
  projectId: "on-ipti",
});


const Tasks = () => {
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [users, setUsers] = useState([]);

    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
        };
        getUsers();

    }, []);



    return (
        <div>
            <ul>
                {
                    users.map((user)=>{
                        return (
                            <div key={user.id}>
                                <li>{user.name}</li>
                                <li>{user.email}</li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Tasks;
