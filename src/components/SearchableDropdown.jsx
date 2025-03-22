import {useState,} from 'react';

export default function SearchableDropdown({options,label}) {
    const [query, setQuery] = useState(''); 
    const [isOpen, setIsOpen] = useState(false);
    //Todo: handle selecting an item,

  //Todo: when we select a time the list will close
    

    const filter = (options) => {
        return options.filter((option => 
            {
                let string=option[label].toLowerCase(); // Convert the option's label to lowercase
                return string.indexOf(query.toLowerCase()) > -1; //Ensure it 
            }))
    }

  return (
    <div>
      {/*Search Bar*/}
      <div>This is the serch bar</div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg> */}

      <input
        type="text"
        name="choosingAnAccount"
        placeholder="Enter Account here"
        onChange ={(e) => {setQuery(e.target.value)}}
      >

      </input>
      <div className={`content ${isOpen ? 'open':''}`}>
            {filter(options).map((option,index) => 
                {
                    return(
                        <div key={index}>
                            {option[label]}
                        </div>
                    )
                })
            }
      </div>

      {/* List of searchable items */}
    </div>
    
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
