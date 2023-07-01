import useTabNavigation from "../hooks/useTabNavigation";

const Tabs = ({tabs}) => {

   const { activeTab, handleTabChange, getTabClassName } = useTabNavigation(tabs[0].name);

   return (
      <>
         <div className="tabs is-boxed is-centered">
            <ul>
               {tabs.map((option, index) => (
                  <li key={index}
                     className={getTabClassName(option.name)}  
                     onClick={() => handleTabChange(option.name)}>
                     <a href="/#">
                        <span className="icon is-small">
                           <i className={`fas fa-${option.icon} is-small`} aria-hidden="true"/>
                        </span>
                        <span>{`${option.name}`}</span>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
         <>
         {tabs.map((option, index) => (
            activeTab === option.name &&
            <div key={index}>
               {option.content}
            </div>
            ))
         }         
         </>
      </>
   );
};

export default Tabs;