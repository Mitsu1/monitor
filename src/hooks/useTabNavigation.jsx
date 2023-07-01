import { useState } from 'react';

const useTabNavigation = (inicialState) => {
   const [activeTab, setActiveTab] = useState(inicialState);
   
   const handleTabChange = (option) => {
      setActiveTab(option);
   };

   const getTabClassName = (option) => {
      return option === activeTab ? 'is-active' : '';
   };

   return {
      activeTab,
      handleTabChange,
      getTabClassName,
   };
};

export default useTabNavigation;