import mailCtrl from '../../api/controllers/mail';
import smsCtrl from '../../api/controllers/sms';
import leadoutpostCtrl from '../../api/controllers/leadoutpost';
import konnektiveCtrl from '../../api/controllers/konnektive';
import testSession from '../../api/controllers/testSession';
import resError from '../../api/middlewares/res_error';
import resSuccess from '../../api/middlewares/res_success';

function route(router) {
  router.use(resError);
  router.use(resSuccess);

  router.get('/get-lead/:id', konnektiveCtrl.getLead);
  router.post('/create-lead', konnektiveCtrl.createKonnektiveLead);
  router.post('/create-order', konnektiveCtrl.addKonnektiveOrder);
  router.post('/upsell', konnektiveCtrl.upsell);
  router.get('/get-trans/:id', konnektiveCtrl.getTrans);

  // router.post('/text/:contactId', smsCtrl.sendSMS);
  // router.get('/text/:contactId', smsCtrl.sendSMS);
  // router.get('/text2', smsCtrl.sendSMS2);
  // router.post('/text2', smsCtrl.sendSMS2);
  // router.get('/verify-phone/:phone', mailCtrl.verifyPhoneNumber);
  // router.get('/aphq', mailCtrl.triggerJourney);
  // router.post('/aphq', mailCtrl.triggerJourney);
  
  router.get('/state/:stateNumber', mailCtrl.getStateInfo);
  // router.get('/ipinfo', mailCtrl.getIpinfo);
  router.get('/ping' , mailCtrl.ping);
  router.post('/add-contact', leadoutpostCtrl.addContact);
  router.post('/update-contact', leadoutpostCtrl.updateContact);
  //router.post('/add-leadoutpost', leadoutpostCtrl.addLeadoutpost);
  //router.get('/run-migrator', leadoutpostCtrl.migrate);

//related to https://starlightgroup.atlassian.net/browse/SG-5
//shows 404 on production
  router.get('/testSession', testSession);
};

var routes = {v2 : route};

export {routes};
