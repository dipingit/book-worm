import { Bounce, toast } from "react-toastify";

const getStoredReadingList = () => {

    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){

        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

}

const addToReadingList = (id) => {

    const storedList = getStoredReadingList();
    
    if(storedList.includes(id)){
        console.log(id, 'book already exists in the reading list');
        toast.error('This book already exists in your reading list!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        
        toast('This book is added to your reading list');
    }
}

const getStoredWishList = () => {

    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){

        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

}

const addToWishList = (id) => {

    const storedList = getStoredWishList();
    
    if(storedList.includes(id)){
        console.log(id, 'book already exists in the wish list');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}



export {addToReadingList, addToWishList, getStoredReadingList};