import React from 'react';
import './TodosLoading.css'
import { TiTick } from "react-icons/ti";
import { TiTrash } from "react-icons/ti";

function TodosLoading({
  searchValue,
  setSearchValue,
}) {
    
    return (
        
        <div className="skeleton-task">
          <TiTick className="skeleton-check"></TiTick>
          <div className="skeleton-text"></div>
          <TiTrash className="skeleton-delete"></TiTrash>
        </div>
    
     
    );
  }

  export { TodosLoading };