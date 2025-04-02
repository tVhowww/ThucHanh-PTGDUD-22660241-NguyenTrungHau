import React from "react";
import "./Layout.css";

function Layout() {
  return (
    <div>
      <div className="container border-1 flex">
        <div className="main-menu w-1/4 flex flex-col items-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="content w-3/4 flex flex-col">
          <div className="header border-1 text-center">
            <h1>My header</h1>
          </div>
          <div className="main-content">
            <div className="overview py-4 border-1 flex justify-evenly">
              <button className="px-4 py-2">default</button>
              <button className="px-4 py-2">default</button>
              <button className="px-4 py-2">default</button>
              <button className="px-4 py-2">default</button>
            </div>
            <div className="detailed-report p-4 flex  border-1">
              <table>
                <thead>
                  <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
          <div className="footer border-1 text-center">
            <h1>Footer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
