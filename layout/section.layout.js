  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'layout/main.tpl.html',
    abstract:true
  }).state('main.layout', {
        url : '/l',
        abstract : true,
        views : {
          'head' : {
            template : '<div>head xx</div>',
        //    controller : 'headCtrl'
          },
          'left' : {
            template : '<div>left <ui-view></ui-view></div>',
           // controller : 'LeftCtrl'
          },
          'middle' : {
            template : 'sss <ui-view></ui-view> ',
          },
          'bottom' : {
            template : '<div>botton</div> '
          }
        }
      });

       $stateProvider.state('main.layout.doc',{
        url : '/r',
      
        views : {
            middle:{
  template : '<div>middle xxx y </div>',
            }
        }
        
        });
