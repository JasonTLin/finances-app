export const createlistItem = (listItem) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make an async call to database
        const fireStore = getFirestore();
        fireStore.collection('listItems').add({
            ...listItem
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', listItem});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR', err});
        })
    }
};

export const deletelistItem = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make an async call to database
        const fireStore = getFirestore();
        fireStore.collection('listItems').doc(id)
    }
}


export const updatelistItem = (id, listItem) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make an async call to database
        const fireStore = getFirestore();
        fireStore.collection('listItems').doc(id).update(listItem)
    }
}

export function mapdata(listItems, label){
    var annualItems = listItems.filter(function(obj){
            return obj.dateTime.seconds > getnewyear();
    });
    var data = annualItems.map(function(obj){
        if(obj.item === label){
            return obj.amount;
        } else {
            return 0;
        }
    });
    return data.reverse();
};

export function mapdate(listItems){

        var annualItems = listItems.filter(function(obj){
            return obj.dateTime.seconds > getnewyear();
        });

        var date = annualItems.map(function(obj){
        var dt = new Date(obj.dateTime.seconds*1000)
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var month = months[dt.getMonth()];
        var day = dt.getDate();
        return month + " " + day;
    });
    return date.reverse();
};

export function getSum(total, num) {
    return total + num;
}

export function converttopie(data){
if (data === undefined || data.length === 0){
    return 0;
} else {
    var piedata = data.reduce(getSum).toFixed(2);
    return piedata;
};
}

function getnewyear() {
    var d = new Date();
    d = d.setMonth(0, 0);
    return d/1000;
}
