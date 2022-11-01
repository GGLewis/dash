<template >

     <header>
      <div class="navbar-fixed">
        <nav class="navbar white">
          <div class="nav-wrapper"><a href="#!" class="brand-logo grey-text text-darken-4">Home</a>
            <ul id="nav-mobile" class="right">
              
              <li class="hide-on-med-and-down"><a href="#!" data-target="dropdown1" class="dropdown-trigger waves-effect"><i class="material-icons">notifications</i></a></li>
              <li><a href="#!" data-target="chat-dropdown" class="dropdown-trigger waves-effect"><i class="material-icons">settings</i></a></li>
            </ul><a href="#!" data-target="sidenav-left" class="sidenav-trigger left"><i class="material-icons black-text">menu</i></a>
          </div>
        </nav>
      </div>
      <ul id="sidenav-left" class="sidenav sidenav-fixed">
        <li><a href="#" class="logo-container">Admin<i class="material-icons left">spa</i></a></li>
        <li class="no-padding">
          <ul class="collapsible collapsible-accordion">
            <li class="bold waves-effect active"><a class="collapsible-header">MENUS<i class="material-icons chevron">chevron_left</i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#" class="waves-effect active">EMPLOYES<i class="material-icons">web</i></a></li>
                  <li><a href="#" class="waves-effect">MANAGERS<i class="material-icons">list</i></a></li>
                  <li><a href="#" class="waves-effect">EQUIPES<i class="material-icons">dashboard</i></a></li>
                  <li><a href="#" class="waves-effect">Chat<i class="material-icons">chat</i></a></li>
                </ul>
              </div>
            </li>
           
            <li class="bold waves-effect"><a class="collapsible-header">Account<i class="material-icons chevron">chevron_left</i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#" class="waves-effect">Log out<i class="material-icons">person</i></a></li>
                  <li><a href="#" class="waves-effect">Profil<i class="material-icons">settings</i></a></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
 
      <div id="chat-dropdown" class="dropdown-content dropdown-tabbed">
        <ul class="tabs tabs-fixed-width">
          <li class="tab col s3"><a href="#settings">Settings</a></li>
          <li class="tab col s3"><a href="#friends" class="active">Friends</a></li>
        </ul>
        <div id="settings" class="col s12">
          <div class="settings-group">
            <div class="setting">Night Mode
              <div class="switch right">
                <label>
                  <input type="checkbox"><span class="lever"></span>
                </label>
              </div>
            </div>
            <div class="setting">Beta Testing
              <label class="right">
                <input type="checkbox"><span></span>
              </label>
            </div>
          </div>
        </div>
   
      </div>
    </header>
    <main>
        <div class="container">
  <div class="masonry row">
    <div class="col s12">
      <h2>Dashboard</h2>
    </div>
    <div class="col l3 m6 s12">

      <div class="card">
        <div class="card-stacked">
          <div class="card-metrics card-metrics-static">
            <div class="card-metric">
              <div class="card-metric-title">Revenue</div>
              <div class="card-metric-value">$12,476.00</div>
              <div class="card-metric-change increase">
                <i class="material-icons left">keyboard_arrow_up</i>
                12%
              </div>
            </div>
          </div>
        </div>
        <div class="card-chart">
          <canvas id="flush-area-chart-blue" height="100px"></canvas>
        </div>
      </div>

    </div>
    <div class="col l3 m6 s12">

      <div class="card">
        <div class="card-stacked">
          <div class="card-metrics card-metrics-static">
            <div class="card-metric">
              <div class="card-metric-title">Clicks</div>
              <div class="card-metric-value">11,893</div>
              <div class="card-metric-change increase">
                <i class="material-icons left">keyboard_arrow_up</i>
                8%
              </div>
            </div>
          </div>
        </div>
        <div class="card-chart">
          <canvas id="flush-area-chart-yellow" height="100px"></canvas>
        </div>
      </div>

    </div>

        <div class="col l3 m6 s12">

      <div class="card">
        <div class="card-stacked">
          <div class="card-metrics card-metrics-static">
            <div class="card-metric">
              <div class="card-metric-title">Revenue</div>
              <div class="card-metric-value">$12,476.00</div>
              <div class="card-metric-change increase">
                <i class="material-icons left">keyboard_arrow_up</i>
                12%
              </div>
            </div>
          </div>
        </div>
        <div class="card-chart">
          <canvas id="flush-area-chart-blue" height="100px"></canvas>
        </div>
      </div>

    </div>

</div>
</div>
    </main>
</template>