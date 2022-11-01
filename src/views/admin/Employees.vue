<template>
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
       <li><a href="dashboard.html" class="logo-container">Admin<i class="material-icons left">spa</i></a></li>

       <li><a  class="waves-effect active">Dashboard<i class="material-icons">web</i></a></li>
                 <li><a href="#" class="waves-effect">Setting<i class="material-icons">settings</i></a></li>
                 <li><a href="#" class="waves-effect">Team<i class="material-icons">person</i></a></li>
                 <li><a href="#" class="waves-effect">Employees<i class="material-icons">pie_chart</i></a></li>
       <li class="no-padding">
      
         
          
       
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
<button class="btn right" @click="add()">Enregistrer</button>
<div class="col s12">
      <h4 class="section-title">Liste des employees</h4>

      <div class="card">
        <table id="table-custom-elements" class="row-border" cellspacing="0" width="100%">
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Username</th>
              <th>E-mail</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
                <tr>
                    <td>Name</td>
                    <td>Lewis</td>
                    <td>lewis@email.com</td>
                    <td>Edict  / delete / view</td>
                </tr>

          </tbody>
        </table>
      </div>

    </div>

</div>


</div>
   </main>
</template>

<script>
export default {
  name: 'Admin',
  data : function(){
    return {
      email: '',
      password : ''
    }

  },
   methods :{
    add : function(){
    this.$router.push({ name: 'addemploye' });

  }
}

}


</script>