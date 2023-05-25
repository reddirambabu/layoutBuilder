// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <nav className="navbar-container">
          <h1 className="nav-heading">Layout</h1>
          <div>
            <div className="input-container">
              <input
                type="checkbox"
                className="checkbox"
                checked={showContent}
                value={showContent}
                id="showContent"
                onClick={onToggleShowContent}
              />
              <label htmlFor="showContent" className="label">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                className="checkbox"
                value={showLeftNavbar}
                id="showLeftNavbar"
                onClick={onToggleShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="showLeftNavbar" className="label">
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                className="checkbox"
                value={showRightNavbar}
                id="showRightNavbar"
                onClick={onToggleShowRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="showRightNavbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
