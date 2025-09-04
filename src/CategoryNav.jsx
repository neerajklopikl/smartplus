// src/CategoryNav.js

import React, { useState } from 'react';
import { categoryData } from './data';
import './CategoryNav.css';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const CategoryNav = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  // This state will now hold the entire sub-item object, not just the name
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMenuEnter = (menuId) => {
    const menu = categoryData.find(item => item.id === menuId);
    if (menu && menu.arrow) {
      setActiveMenu(menuId);
    }
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const handleSubMenuEnter = (subItem) => {
    setActiveSubMenu(subItem);
  };

  const currentMenuData = categoryData.find(item => item.id === activeMenu);
  
  // Helper to check if the active sub-menu is in a given column
  const isSubMenuActiveInColumn = (column, activeItem) => {
    if (!activeItem) return false;
    return column.some(item => item.name === activeItem.name);
  };

  return (
    <div className="category-nav-container">
      {categoryData.map(item => (
        <div 
          className="category-item-wrapper" 
          key={item.id} 
          onMouseEnter={() => handleMenuEnter(item.id)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="category-item">
            <img src={item.image} alt={item.name} className="category-image" />
            <p className={`category-name ${activeMenu === item.id ? 'active' : ''}`}>
              {item.name}
              {item.arrow && <IoIosArrowDown className={`arrow-icon ${activeMenu === item.id ? 'up' : ''}`} />}
            </p>
          </div>

          {activeMenu === item.id && item.menu && (
            <div className="mega-menu">
              {/* --- Column 1 --- */}
              <div className="menu-column">
                {item.menu.column1.map(subItem => (
                  <div 
                    key={subItem.name} 
                    className={`menu-l2-item ${activeSubMenu?.name === subItem.name ? 'active-l2' : ''}`}
                    onMouseEnter={() => handleSubMenuEnter(subItem)}
                  >
                    {subItem.name}
                    {subItem.subItems && subItem.subItems.length > 0 && <IoIosArrowForward className="arrow-forward-icon" />}
                  </div>
                ))}
              </div>

              {/* --- L3 Menu for Column 1 --- */}
              {isSubMenuActiveInColumn(item.menu.column1, activeSubMenu) && (
                <div className="menu-l3-column">
                  {activeSubMenu.subItems.map(l3item => (
                    <a href="#" key={l3item} className="menu-l3-item">{l3item}</a>
                  ))}
                </div>
              )}

              {/* --- Column 2 --- */}
              {item.menu.column2 && (
                <div className="menu-column">
                  {item.menu.column2.map(subItem => (
                    <div 
                      key={subItem.name} 
                      className={`menu-l2-item ${activeSubMenu?.name === subItem.name ? 'active-l2' : ''}`}
                      onMouseEnter={() => handleSubMenuEnter(subItem)}
                    >
                      {subItem.name}
                      {subItem.subItems && subItem.subItems.length > 0 && <IoIosArrowForward className="arrow-forward-icon" />}
                    </div>
                  ))}
                </div>
              )}
              
              {/* --- L3 Menu for Column 2 --- */}
              {item.menu.column2 && isSubMenuActiveInColumn(item.menu.column2, activeSubMenu) && (
                <div className="menu-l3-column">
                  {activeSubMenu.subItems.map(l3item => (
                    <a href="#" key={l3item} className="menu-l3-item">{l3item}</a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryNav;