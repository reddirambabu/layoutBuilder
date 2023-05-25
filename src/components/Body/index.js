// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const renderLeftNavbar = () => (
    <div className="left-navbar-container ">
      <h1 className="left-navbar-heading">Left Navbar Menu</h1>
      <ul className="left-navbar-items">
        <li className="item">Item 1</li>
        <li className="item">Item 2</li>
        <li className="item">Item 3</li>
        <li className="item">Item 4</li>
      </ul>
    </div>
  )

  const renderContent = () => (
    <div className="content-container">
      <h1 className="left-navbar-heading">Content</h1>
      <p className="description">
        Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  const renderRightNavbar = () => (
    <div className=" right-navbar-container">
      <h1 className="left-navbar-heading">Right Navbar</h1>
      <div className="box-container">
        <div className="add-box">
          <p>Ad 1</p>
        </div>
        <div className="add-box">
          <p>Ad 2</p>
        </div>
      </div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar ? renderLeftNavbar() : null}
            {showContent ? renderContent() : null}
            {showRightNavbar ? renderRightNavbar() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
