import {useState,} from 'react';
import classes from './SearchableDropDown.module.css'

export default function SearchableDropdown({options, handleChange}) {
    options.forEach((element, index, array) => 
      {array[index] = typeof element === 'string' ? element : String(element)});
    const [query, setQuery] = useState(''); 
    //Todo: handle selecting an item,    
    //Todo: cleanup
  
//   useEffect(() => {
//     document.addEventListener("click", toggle);
//     return () => document.removeEventListener("click", toggle);
//   }, []);

  function filter(options) {
      return options.filter((option,index) => {
        let string = option.toLowerCase();
        return string.indexOf(query.toLowerCase()) > -1
      });
  };

  function selectAnOption(option){
    setQuery(()=>'');
    handleChange(option);
  }
  return (
    <section className={classes.container}>
      <div className={classes.searchBarContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width='2em' stroke="currentColor" class="size-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

        <input
          type="text"
          name="choosingAnAccount"
          placeholder="Enter Account here"
          onChange ={(e) => {setQuery(e.target.value)}}
        >
        </input>
      </div>
      <div className={classes.list}>
            {filter(options).map((option,index) => 
                {
                    return(
                        <div key={`account ${index}`} onClick={()=>selectAnOption(option)} >
                            {option}
                        </div>
                    )
                })
            }
      </div>
    </section>
  );
}

//     style={{
//     width: '300px',
//     height: 'auto',  // Allow height to grow based on content
//     backgroundColor: 'white',  // Change background to white for card style
//     position: 'relative',
//     bottom: 130,
//     left: 400,
//     borderRadius: '10px',  // Rounded corners for a card look
//     padding: '20px',  // Add some padding
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow for depth
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',  // Space between elements
//     }}
// >
//     <select
//     name='accounts'
//     onChange={handleAccountChange}
//     style={{
//         padding: '10px',
//         borderRadius: '5px',
//         border: '1px solid #ddd',  // Light border
//         fontSize: '14px',
//     }}
//     >
//     {user.accounts.map(account => (
//         <option key={account} value={account}>
//         {account}
//         </option>
//     ))}
//     </select>

//     {/* <select
//     name='buckets'
//     onChange={handleBucketChange}
//     style={{
//         padding: '10px',
//         borderRadius: '5px',
//         border: '1px solid #ddd',  // Light border
//         fontSize: '14px',
//     }}
//     >
//     {account.bucket &&
//         account.bucket.map((element, index) => (
//         <option key={element} value={element}>
//             {`Bucket ${index + 1}`}
//         </option>
//         ))}
//     </select> */}
