
const example = [
    {
        _id:1,
        timestamp:'2020-04-04 00:00:00',
        user_id:1,
        user_name:'Eduardo',
        user_nickname:'@eduardo',
        picture_url:'',
        post_text:'Testando post'
    }
]

export default function posts(state = example ,action){
   switch(action.type){
        case 'ADD_POST':
            return [action.post,...state];
        default: 
            return state;
   }
}