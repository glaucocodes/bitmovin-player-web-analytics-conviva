/*! (C) 2022 Conviva, Inc. All rights reserved. Confidential and proprietary. */

!(function (t, n) {
  'function' === typeof define && define.amd
    ? define(n)
    : ('object' === typeof exports || ('object' === typeof module && module.exports)) && (module.exports = n()),
    'undefined' !== typeof t &&
      t &&
      (t.Conviva || t.ConvivaLoading || ((t.ConvivaLoading = !0), (t.Conviva = n()), delete t.ConvivaLoading));
})(this, function () {
  var at = {};
  return (
    (function () {
      'use strict';
      var ht = {};
      !(function () {
        var T = (at.Constants = {});
        (T.version = '4.5.8'),
          (T.CUSTOMER_KEY = 'customerKey'),
          (T.GATEWAY_URL = 'gatewayUrl'),
          (T.LOG_LEVEL = 'logLevel'),
          (T.ASSET_NAME = 'Conviva.assetName'),
          (T.PLAYER_NAME = 'Conviva.applicationName'),
          (T.APPLICATION_VERSION = 'c3.app.version'),
          (T.IS_LIVE = 'Conviva.streamType'),
          (T.ENCODED_FRAMERATE = 'Conviva.encodedFrameRate'),
          (T.DEFAULT_RESOURCE = 'Conviva.defaultResource'),
          (T.STREAM_URL = 'Conviva.streamUrl'),
          (T.VIEWER_ID = 'Conviva.viewerId'),
          (T.DURATION = 'Conviva.duration'),
          (T.UTM_TRACKING_URL = 'c3.cm.utmTrackingUrl'),
          (T.POD_INDEX = 'podIndex'),
          (T.POD_POSITION = 'podPosition'),
          (T.POD_DURATION = 'podDuration'),
          (T.AD_TYPE = 'adType'),
          (T.MODULE_NAME = 'Conviva.moduleName'),
          (T.MODULE_VERSION = 'Conviva.moduleVersion'),
          (T.FRAMEWORK_NAME = 'Conviva.frameworkName'),
          (T.FRAMEWORK_VERSION = 'Conviva.frameworkVersion'),
          (T.i = 'Constants not yet configured'),
          (T.e = 'Invalid : Did you report playback ended?'),
          (T.s = 'Invalid : Did you report ad playback ended?'),
          (T.o = 'Player cannot be null'),
          (T.u = 'PlaybackAnlytics already built'),
          (T.h = 'PlaybackAnlytics not yet built'),
          (T.Playback = {
            BITRATE: 'BITRATE',
            PLAY_HEAD_TIME: 'PLAY_HEAD_TIME',
            RESOLUTION: 'RESOLUTION',
            BUFFER_LENGTH: 'BUFFER_LENGTH',
            PLAYER_STATE: 'PLAYER_STATE',
            RENDERED_FRAMERATE: 'RENDERED_FRAMERATE',
            SEEK_STARTED: 'SEEK_STARTED',
            SEEK_ENDED: 'SEEK_ENDED',
            CDN_IP: 'CDN_IP',
            DROPPED_FRAMES_TOTAL: 'DROPPED_FRAMES_TOTAL',
            DROPPED_FRAMES_COUNT: 'DROPPED_FRAMES_COUNT',
          }),
          (T.Network = {
            SIGNAL_STRENGTH: 'SIGNAL_STRENGTH',
            LINK_ENCRYPTION: 'LINK_ENCRYPTION',
            CONNECTION_TYPE: 'CONNECTION_TYPE',
          }),
          (T.ErrorSeverity = { FATAL: 1, WARNING: 0 }),
          (T.NO_SESSION_KEY = -2),
          (T.AdPosition = { PREROLL: 'Pre-roll', MIDROLL: 'Mid-roll', POSTROLL: 'Post-roll' }),
          (T.AdPlayer = { CONTENT: 'CONTENT', SEPARATE: 'SEPARATE' }),
          (T.DeviceType = {
            DESKTOP: 'DESKTOP',
            CONSOLE: 'Console',
            SETTOP: 'Settop',
            MOBILE: 'Mobile',
            TABLET: 'Tablet',
            SMARTTV: 'SmartTV',
          }),
          (T.AdType = { CLIENT_SIDE: 'Client Side', SERVER_SIDE: 'Server Side' }),
          (T.AdSlates = {
            BLACKOUT_SLATE: 'Blackout slate',
            TECHNICAL_DIFFICULTIES_SLATE: 'Technical Difficulties slate',
            COMMERCIAL_SLATE: 'Commercial Break slate',
            OTHER_SLATE: 'Other slate',
            VPAID: 'VPAID',
            REGULAR: 'Regular Ad',
          }),
          (T.AdServingType = { INLINE: 'Inline', WRAPPER: 'Wrapper' }),
          (T.DeviceCategory = {
            ANDROID_DEVICE: 'AND',
            APPLE_DEVICE: 'APL',
            CHROMECAST: 'CHR',
            DESKTOP_APP: 'DSKAPP',
            DEVICE_SIMULATOR: 'SIMULATOR',
            LG_TV: 'LGTV',
            NINTENDO: 'NINTENDO',
            PLAYSTATION: 'PS',
            ROKU: 'RK',
            SAMSUNG_TV: 'SAMSUNGTV',
            SMART_TV: 'TV',
            SET_TOP_BOX: 'STB',
            TIVO: 'TIVO',
            WEB: 'WEB',
            WINDOWS_DEVICE: 'WIN',
            XBOX: 'XB',
            KAIOS_DEVICE: 'KAIOS',
          }),
          (T.LogLevel = { DEBUG: 0, INFO: 1, WARNING: 2, ERROR: 3, NONE: 4 }),
          (T.PlayerState = {
            STOPPED: 'STOPPED',
            PLAYING: 'PLAYING',
            BUFFERING: 'BUFFERING',
            PAUSED: 'PAUSED',
            UNKNOWN: 'UNKNOWN',
            NOT_MONITORED: 'NOT_MONITORED',
          }),
          (T.Events = {
            USER_WAIT_STARTED: 'Conviva.UserWaitStarted',
            USER_WAIT_ENDED: 'Conviva.UserWaitEnded',
            BUMPER_VIDEO_STARTED: 'Conviva.BumperVideoStarted',
            BUMPER_VIDEO_ENDED: 'Conviva.BumperVideoEnded',
            AD_REQUESTED: 'Conviva.AdRequested',
            AD_RESPONSE: 'Conviva.AdResponse',
            AD_SLOT_STARTED: 'Conviva.SlotStarted',
            AD_ATTEMPTED: 'Conviva.AdAttempted',
            AD_SLOT_ENDED: 'Conviva.SlotEnded',
            AD_IMPRESSION_START: 'Conviva.AdImpression',
            AD_START: 'Conviva.AdStart',
            AD_FIRST_QUARTILE: 'Conviva.AdFirstQuartile',
            AD_MID_QUARTILE: 'Conviva.AdMidQuartile',
            AD_THIRD_QUARTILE: 'Conviva.AdThirdQuartile',
            AD_COMPLETE: 'Conviva.AdComplete',
            AD_END: 'Conviva.AdEnd',
            AD_IMPRESSION_END: 'Conviva.AdImpressionEnd',
            AD_SKIPPED: 'Conviva.AdSkipped',
            AD_ERROR: 'Conviva.AdError',
            AD_PROGRESS: 'Conviva.AdProgress',
            AD_CLOSE: 'Conviva.AdClose',
            CONTENT_PAUSED: 'Conviva.PauseContent',
            CONTENT_RESUMED: 'Conviva.ResumeContent',
            POD_START: 'Conviva.PodStart',
            POD_END: 'Conviva.PodEnd',
          }),
          (T.ErrorType = {
            ERROR_UNKNOWN: 'ERROR_UNKNOWN',
            ERROR_IO: 'ERROR_IO',
            ERROR_TIMEOUT: 'ERROR_TIMEOUT',
            ERROR_NULL_ASSET: 'ERROR_NULL_ASSET',
            ERROR_MISSING_PARAMETER: 'ERROR_MISSING_PARAMETER',
            ERROR_NO_AD_AVAILABLE: 'ERROR_NO_AD_AVAILABLE',
            ERROR_PARSE: 'ERROR_PARSE',
            ERROR_INVALID_VALUE: 'ERROR_INVALID_VALUE',
            ERROR_INVALID_SLOT: 'ERROR_INVALID_SLOT',
            ERROR_3P_COMPONENT: 'ERROR_3P_COMPONENT',
            ERROR_UNSUPPORTED_3P_FEATURE: 'ERROR_UNSUPPORTED_3P_FEATURE',
            ERROR_DEVICE_LIMIT: 'ERROR_DEVICE_LIMIT',
            ERROR_UNMATCHED_SLOT_SIZE: 'ERROR_UNMATCHED_SLOT_SIZE',
          }),
          (T.StreamType = { UNKNOWN: 'UNKNOWN', LIVE: 'LIVE', VOD: 'VOD' }),
          (T.CallbackFunctions = {
            CONSOLE_LOG: 'consoleLog',
            MAKE_REQUEST: 'makeRequest',
            SAVE_DATA: 'saveData',
            LOAD_DATA: 'loadData',
            GET_EPOCH_TIME_IN_MS: 'getEpochTimeInMs',
            CREATE_TIMER: 'createTimer',
            GENERATE_HASH: 'generateHash',
            BASE64_ENCODE: 'base64Encode',
          }),
          (T.DeviceMetadata = {
            BRAND: 'DeviceBrand',
            MANUFACTURER: 'DeviceManufacturer',
            MODEL: 'DeviceModel',
            TYPE: 'DeviceType',
            VERSION: 'DeviceVersion',
            OS_NAME: 'OperatingSystemName',
            OS_VERSION: 'OperatingSystemVersion',
            CATEGORY: 'DeviceCategory',
            SCREEN_RESOLUTION_WIDTH: 'ScreenWidth',
            SCREEN_RESOLUTION_HEIGHT: 'ScreenHeight',
            SCREEN_RESOLUTION_SCALE_FACTOR: 'ScaleFactor',
          }),
          (T.AD_PRELOAD_FEATURE = 'adPreloading'),
          (T.AD_TAG_URL = 'adTagUrl'),
          (T.IMASDK_CONTENT_PLAYER = 'imaMainContentPlayer'),
          (T.CONVIVA_AD_MODULE = 'convivaAdModule'),
          (T.CONVIVA_MODULE = 'convivaModule'),
          (T.MEDIA_ELEMENT = 'mediaElement');
        var a = (at.Client = function () {
          var h = this;
          (this.a = !1),
            (this.version = a.version),
            (this.c = null),
            (this.l = null),
            (this.v = null),
            (this.d = -1),
            (this.p = null),
            (this.R = null),
            (this.w = null),
            (this.T = null),
            (this.S = -1),
            (this.g = !1),
            (this.N = {}),
            (this.O = function () {
              h.c, 0;
            }),
            (this._ = {}),
            (this.A = null),
            (this.C = null),
            (this.I = null),
            (this.y = function () {
              this.w.m('Client.makeIPV4IPV6GlobalSessions', function () {
                var t;
                !h.T ||
                  (null !== (t = h.T.get(Y.D)) &&
                    t !== B.P &&
                    h.l &&
                    (((t = new c()).custom['c3.IPV4IPV6GlobalSession'] = 'T'),
                    (t.custom['c3.domain'] = h.p.M.indexOf(f.L) > -1 ? f.L : f.U),
                    (h.V = h.l.k(t, null)),
                    ((t = new c()).custom['c3.IPV4IPV6GlobalSession'] = 'T'),
                    (t.custom['c3.domain'] = h.p.F.indexOf(f.H) > -1 ? f.H : f.B),
                    (h.G = h.l.k(t, null))));
              });
            }),
            (this.j = function (i) {
              h.w.m('Client.updateConnectionType', function () {
                if (((h.A = i), h.l)) {
                  var t,
                    n = h.l.K();
                  for (t in n) n[t].W(i);
                }
              });
            }),
            (this.q = function (i) {
              h.w.m('Client.updateLinkEncryption', function () {
                if (((h.C = i), h.l)) {
                  var t,
                    n = h.l.K();
                  for (t in n) n[t].Y(i);
                }
              });
            }),
            (this.J = function (t) {
              h.w.m('Client.updateSignalStrength', function () {
                h.I = t;
              });
            }),
            function (t, n, i, e) {
              if (!(t instanceof f))
                throw new Error('clientSettings parameter should be an instance of ClientSettings.');
              if (!(n instanceof R)) throw new Error('systemFactory parameter should be an instance of SystemFactory.');
              (t.gatewayUrl !== f.X + f.Q && t.gatewayUrl !== f.Z + f.Q) || (this.a = !0),
                e && (this.version = e),
                (this.p = t.z()),
                (this.v = n),
                this.v.$('SDK', this.p, this.version),
                (this.w = this.v.tt(this.version)),
                this.w.m(
                  'Client.init',
                  function () {
                    if (
                      ((h.T = h.v.nt()),
                      h.T.it(),
                      (h.S = h.T.get(Y.et)),
                      (-1 !== h.S && void 0 !== h.S && null !== h.S) || (h.S = tt.ot()),
                      (h.l = h.v.rt(h, h.p, h.T)),
                      i)
                    )
                      for (var t in i)
                        switch (t) {
                          case T.Network.CONNECTION_TYPE:
                            h.j(i[t]);
                            break;
                          case T.Network.LINK_ENCRYPTION:
                            h.q(i[t]);
                            break;
                          case T.Network.SIGNAL_STRENGTH:
                            h.J(i[t]);
                        }
                    h.y();
                  },
                  function (t) {
                    throw new Error('Client constructor failed: ' + t.message);
                  },
                );
            }.apply(this, arguments),
            (this.release = function () {
              this.g ||
                this.w.m('Client.release', function () {
                  h.c,
                    h.l.ut(),
                    (h.l = null),
                    (h.d = -1),
                    (h.S = -1),
                    (h.w = null),
                    (h.p = null),
                    (h.R = null),
                    (h.v = null),
                    (h.g = !0);
                });
            }),
            (this.createSession = function (t, n, i) {
              var e = a.NO_SESSION_KEY;
              return (
                this.g ||
                  ((!t || t instanceof c) &&
                    this.w.m('Client.createSession', function () {
                      e = h.l.ht(t, K.ct.ft, n, (i ? T : h).version);
                    })),
                e
              );
            }),
            (this.createAdSession = function (i, e, s, o, r) {
              var u = a.NO_SESSION_KEY;
              return (
                this.g ||
                  ((!e || e instanceof c) &&
                    this.w.m('Client.createAdSession', function () {
                      var t, n;
                      e || (e = new c()),
                        !Z.lt(i) ||
                          i === a.NO_SESSION_KEY ||
                          ((t = h.l.vt(i)) &&
                            ((n = e.custom[T.APPLICATION_VERSION]),
                            (e.applicationName && e.viewerId && 'undefined' !== typeof n && n) ||
                              (t.dt &&
                                t.dt.Et &&
                                (!e.viewerId && t.dt.Et.viewerId && (e.viewerId = t.dt.Et.viewerId),
                                !e.applicationName &&
                                  t.dt.Et.applicationName &&
                                  (e.applicationName = t.dt.Et.applicationName),
                                ('undefined' !== typeof n && n) ||
                                  ('undefined' !== typeof (n = t.dt.Et.custom[T.APPLICATION_VERSION]) &&
                                    n &&
                                    (e.custom[T.APPLICATION_VERSION] = n)))),
                            (e.custom['c3.csid'] = Z.pt(t.S)))),
                        (u = h.l.ht(e, K.ct.Rt, s, (o ? T : h).version, r));
                    })),
                u
              );
            }),
            (this.reportError = function (n, i, e) {
              this.g ||
                (Z.wt(i) &&
                  ((e !== a.ErrorSeverity.FATAL && e !== a.ErrorSeverity.WARNING) ||
                    this.w.m('Client.reportError', function () {
                      var t = h.l.vt(n);
                      t && t.Tt(i, e);
                    })));
            }),
            (this.updateContentMetadata = function (i, e) {
              this.g ||
                (e instanceof c &&
                  this.w.m('Client.updateContentMetadata', function () {
                    var t,
                      n = h.l.vt(i);
                    n && ((t = e.z()), n.St(t));
                  }));
            }),
            (this.detachPlayer = function (n) {
              this.g ||
                this.w.m('Client.detachPlayer', function () {
                  var t = h.l.vt(n);
                  t && t.gt();
                });
            }),
            (this.Nt = function (n) {
              this.g ||
                this.w.m('Client.offFocus', function () {
                  var t = h.l.vt(n);
                  t && t.Nt();
                });
            }),
            (this.attachPlayer = function (n, i) {
              this.g ||
                (i instanceof u &&
                  this.w.m('Client.attachPlayer', function () {
                    var t = h.l.vt(n);
                    t && t.Ot(i);
                  }));
            }),
            (this._t = function (n) {
              this.g ||
                this.w.m('Client.onFocus', function () {
                  var t = h.l.vt(n);
                  t && t._t();
                });
            }),
            (this.contentPreload = function (n) {
              this.g ||
                this.w.m('Client.contentPreload', function () {
                  var t = h.l.vt(n);
                  t && t.At();
                });
            }),
            (this.contentStart = function (n) {
              this.g ||
                this.w.m('Client.contentStart', function () {
                  var t = h.l.vt(n);
                  t && t.Ct();
                });
            }),
            (this.sendCustomEvent = function (i, e, s) {
              this.g ||
                (Z.wt(e) &&
                  (Z.It(s),
                  this.w.m('Client.sendCustomEvent', function () {
                    i === a.NO_SESSION_KEY && (h.d < 0 && ((n = new c()), (h.d = h.l.k(n, null))), (i = h.d));
                    var t = Z.yt(s),
                      n = h.l.mt(i);
                    n && n.Dt(e, t);
                  })));
            }),
            (this.adStart = function (n, i, e, s) {
              this.g ||
                (i !== a.AdStream.CONTENT && i !== a.AdStream.SEPARATE) ||
                (e !== a.AdPlayer.CONTENT && e !== a.AdPlayer.SEPARATE) ||
                (s !== a.AdPosition.PREROLL && s !== a.AdPosition.MIDROLL && a.AdPosition.POSTROLL,
                this.w.m('Client.adStart', function () {
                  var t = h.l.vt(n);
                  t && t.bt(i, e, s);
                }));
            }),
            (this.adEnd = function (n) {
              this.g ||
                this.w.m('Client.adEnd', function () {
                  var t = h.l.vt(n);
                  t && t.Pt();
                });
            }),
            (this.cleanupSession = function (t) {
              this.g ||
                (t !== a.NO_SESSION_KEY &&
                  this.w.m('Client.cleanupSession', function () {
                    h.l.vt(t) && h.l.Mt(t);
                  }));
            }),
            (this.getAttachedPlayer = function (n) {
              var i = null;
              return (
                this.g ||
                  n === a.NO_SESSION_KEY ||
                  this.w.m('Client.getAttachedPlayer', function () {
                    var t = h.l.vt(n);
                    t && (i = t.Lt());
                  }),
                i
              );
            }),
            (this.isPlayerAttached = function (t) {
              return !this.g && null !== this.getAttachedPlayer(t);
            }),
            (this.getPlayerStateManager = function (t) {
              if (this.g) throw new Error('This instance of Conviva.Client has been released.');
              return new u(this.v, (t ? T : h).version);
            }),
            (this.releasePlayerStateManager = function (t) {
              if (this.g) throw new Error('This instance of Conviva.Client has been released.');
              this.w.m('Client.releasePlayerStateManager', function () {
                t instanceof u && t.release();
              });
            }),
            (this.Ut = function () {
              return this.p;
            }),
            (this.getId = function () {
              return this.S;
            }),
            (this.getSessionId = function (n) {
              if (this.g) return T.NO_SESSION_KEY;
              var i = null;
              return (
                this.w.m('Client.getSessionId', function () {
                  var t = h.l.vt(n);
                  t && (i = t.Vt());
                }),
                i
              );
            }),
            (this.getClientId = function (n) {
              if (this.g) return null;
              var i = null;
              return (
                this.w.m('Client.getClientId', function () {
                  var t = h.l.vt(n);
                  t && (i = t.kt());
                }),
                i
              );
            }),
            (this.Ft = function (n, i, e) {
              this.g ||
                this.w.m('Client.updateCustomMetric', function () {
                  var t = h.l.vt(n);
                  t && t.Ft(i, e);
                });
            }),
            (this.setUniqueIdentifier = function (t, n) {
              if (this.g) throw new Error('This instance of Conviva.Client has been released.');
              if (!t || 'undefined' === typeof t || '{}' === JSON.stringify(t))
                throw new Error('Identifiers are not set. No action taken !!');
              for (var i in t) this.N[i] = t[i];
              n && (this.O = n);
            }),
            (this.setUserPreferenceForDataCollection = function (t, n) {
              if (this.g) throw new Error('This instance of Conviva.Client has been released.');
              if (!t || 'undefined' === typeof t || '{}' === JSON.stringify(t))
                throw new Error('Identifiers are not set. No action taken !!');
              for (var i in t) 'false' === t[i] ? (this._[i] = n ? Y.Bt.Ht : Y.Bt.Gt) : (this._[i] = Y.Bt.jt);
            }),
            (this.setUserPreferenceForDataDeletion = function (t) {
              if (this.g) throw new Error('This instance of Conviva.Client has been released.');
              if (!t || 'undefined' === typeof t || '{}' === JSON.stringify(t))
                throw new Error('Identifiers are not set. No action taken !!');
              for (var n in t) 'true' === t[n] ? (this._[n] = Y.Bt.Kt) : (this._[n] = Y.Bt.jt);
            });
        });
        (a.version = '4.5.8L'),
          (a.NO_SESSION_KEY = T.NO_SESSION_KEY),
          (a.AdPosition = {
            PREROLL: T.AdPosition.PREROLL,
            MIDROLL: T.AdPosition.MIDROLL,
            POSTROLL: T.AdPosition.POSTROLL,
          }),
          (a.AdStream = { CONTENT: T.AdPlayer.CONTENT, SEPARATE: T.AdPlayer.SEPARATE }),
          (a.AdPlayer = { CONTENT: T.AdPlayer.CONTENT, SEPARATE: T.AdPlayer.SEPARATE }),
          (a.ErrorSeverity = { FATAL: T.ErrorSeverity.FATAL, WARNING: T.ErrorSeverity.WARNING }),
          (a.DeviceType = {
            DESKTOP: T.DeviceType.DESKTOP,
            CONSOLE: T.DeviceType.CONSOLE,
            SETTOP: T.DeviceType.SETTOP,
            MOBILE: T.DeviceType.MOBILE,
            TABLET: T.DeviceType.TABLET,
            SMARTTV: T.DeviceType.SMARTTV,
          }),
          (a.AdTechnology = { CLIENT_SIDE: T.AdType.CLIENT_SIDE, SERVER_SIDE: T.AdType.SERVER_SIDE }),
          (a.AdType = {
            BLACKOUT_SLATE: T.AdSlates.BLACKOUT_SLATE,
            TECHNICAL_DIFFICULTIES_SLATE: T.AdSlates.TECHNICAL_DIFFICULTIES_SLATE,
            COMMERCIAL_SLATE: T.AdSlates.COMMERCIAL_SLATE,
            OTHER_SLATE: T.AdSlates.OTHER_SLATE,
            VPAID: T.AdSlates.VPAID,
            REGULAR: T.AdSlates.REGULAR,
          }),
          (a.AdServingType = { INLINE: T.AdServingType.INLINE, WRAPPER: T.AdServingType.WRAPPER }),
          (a.DeviceCategory = {
            ANDROID_DEVICE: T.DeviceCategory.ANDROID_DEVICE,
            APPLE_DEVICE: T.DeviceCategory.APPLE_DEVICE,
            CHROMECAST: T.DeviceCategory.CHROMECAST,
            DESKTOP_APP: T.DeviceCategory.DESKTOP_APP,
            DEVICE_SIMULATOR: T.DeviceCategory.DEVICE_SIMULATOR,
            LG_TV: T.DeviceCategory.LG_TV,
            NINTENDO: T.DeviceCategory.NINTENDO,
            PLAYSTATION: T.DeviceCategory.PLAYSTATION,
            ROKU: T.DeviceCategory.ROKU,
            SAMSUNG_TV: T.DeviceCategory.SAMSUNG_TV,
            SMART_TV: T.DeviceCategory.SMART_TV,
            SET_TOP_BOX: T.DeviceCategory.SET_TOP_BOX,
            TIVO: T.DeviceCategory.TIVO,
            WEB: T.DeviceCategory.WEB,
            WINDOWS_DEVICE: T.DeviceCategory.WINDOWS_DEVICE,
            XBOX: T.DeviceCategory.XBOX,
            KAIOS_DEVICE: T.DeviceCategory.KAIOS_DEVICE,
          });
        var f = (at.ClientSettings = function () {
          var i = this;
          (this.Wt = null),
            Z.xt(this, 'customerKey', function () {
              return this.Wt;
            }),
            Z.qt(this, 'customerKey', function (t) {
              Z.wt(t) && (this.Wt = t);
            }),
            (this.Yt = f.Jt),
            Z.xt(this, 'heartbeatInterval', function () {
              return this.Yt;
            }),
            Z.qt(this, 'heartbeatInterval', function (t) {
              var n;
              'number' !== typeof t || ((n = Z.Xt(t)) === t && (this.Yt = n));
            }),
            (this.Qt = null),
            (this.M = null),
            (this.F = null),
            Z.xt(this, 'gatewayUrl', function () {
              return this.Qt;
            }),
            Z.qt(this, 'gatewayUrl', function (t) {
              var n;
              Z.wt(t) &&
                (('https' !== (n = t.split('://'))[0] && 'http' !== n[0]) ||
                  (-1 !== t.indexOf('.com', t.length - '.com'.length) && (this.Qt = t)));
            }),
            function (t) {
              if (!Z.wt(t)) throw new Error('customerKey must be valid');
              this.customerKey = t;
            }.apply(this, arguments),
            (this.equals = function (t) {
              return (
                this.customerKey === t.customerKey &&
                this.gatewayUrl === t.gatewayUrl &&
                this.heartbeatInterval === t.heartbeatInterval
              );
            }),
            (this.z = function () {
              var t = new f(this.customerKey);
              return (
                (t.gatewayUrl = (function (t) {
                  if (Z.wt(t)) {
                    var n = t.split('://');
                    if (-1 === n[1].indexOf('cws.conviva.com') && ('https' === n[0] || 'http' === n[0]))
                      return (
                        (i.M = 'https://' + i.customerKey + '.' + f.U),
                        (i.F = 'https://' + i.customerKey + '.' + f.B),
                        t
                      );
                  }
                  return (
                    (i.M = 'https://' + i.customerKey + '.' + f.L),
                    (i.F = 'https://' + i.customerKey + '.' + f.H),
                    'https://' + i.customerKey + '.' + f.Q
                  );
                })(this.gatewayUrl)),
                (t.heartbeatInterval = this.heartbeatInterval),
                (t.M = this.M),
                (t.F = this.F),
                t
              );
            });
        });
        (f.Zt = 'https://conviva.testonly.conviva.com'),
          (f.zt = 'https://cws.conviva.com'),
          (f.Q = 'cws.conviva.com'),
          (f.L = 'ipv4.cws.conviva.com'),
          (f.H = 'ipv6.cws.conviva.com'),
          (f.$t = 'conviva.testonly.conviva.com'),
          (f.U = 'ipv4.testonly.conviva.com'),
          (f.B = 'ipv6.testonly.conviva.com'),
          (f.X = 'https://'),
          (f.Z = 'http://'),
          (f.tn = 5),
          (f.Jt = 20);
        var c = (at.ContentMetadata = function () {
          (this.nn = null),
            Z.xt(this, 'assetName', function () {
              return this.nn;
            }),
            Z.qt(this, 'assetName', function (t) {
              if ('string' !== typeof t) return;
              this.nn = t;
            }),
            (this.in = {}),
            Z.xt(this, 'custom', function () {
              return this.in;
            }),
            Z.qt(this, 'custom', function (t) {
              if ('object' !== typeof t) return;
              this.in = Z.yt(t);
            }),
            (this.en = null),
            Z.xt(this, 'defaultResource', function () {
              return this.en;
            }),
            Z.qt(this, 'defaultResource', function (t) {
              if ('string' !== typeof t) return;
              this.en = t;
            }),
            (this.sn = null),
            Z.xt(this, 'viewerId', function () {
              return this.sn;
            }),
            Z.qt(this, 'viewerId', function (t) {
              if ('string' !== typeof t) return;
              this.sn = t;
            }),
            (this.on = null),
            Z.xt(this, 'applicationName', function () {
              return this.on;
            }),
            Z.qt(this, 'applicationName', function (t) {
              if ('string' !== typeof t) return;
              this.on = t;
            }),
            (this.rn = null),
            Z.xt(this, 'streamUrl', function () {
              return this.rn;
            }),
            Z.qt(this, 'streamUrl', function (t) {
              if ('string' !== typeof t) return;
              this.rn = t;
            }),
            (this.un = c.StreamType.UNKNOWN),
            Z.xt(this, 'streamType', function () {
              return this.un;
            }),
            Z.qt(this, 'streamType', function (t) {
              (t !== c.StreamType.UNKNOWN && t !== c.StreamType.VOD && t !== c.StreamType.LIVE) || (this.un = t);
            }),
            (this.hn = -1),
            Z.xt(this, 'duration', function () {
              return this.hn;
            }),
            Z.qt(this, 'duration', function (t) {
              this.hn = nt.an(t);
            }),
            (this.fn = -1),
            Z.xt(this, 'encodedFrameRate', function () {
              return this.fn;
            }),
            Z.qt(this, 'encodedFrameRate', function (t) {
              this.fn = nt.an(t);
            }),
            function () {}.apply(this, arguments),
            (this.z = function () {
              var t,
                n = new c();
              for (t in ((n.assetName = this.assetName),
              (n.applicationName = this.applicationName),
              (n.streamUrl = this.streamUrl),
              (n.viewerId = this.viewerId),
              (n.defaultResource = this.defaultResource),
              (n.streamType = this.streamType),
              (n.duration = this.duration),
              (n.encodedFrameRate = this.encodedFrameRate),
              this.custom))
                n.custom[t] = this.custom[t];
              return n;
            });
        });
        (c.StreamType = { UNKNOWN: T.StreamType.UNKNOWN, LIVE: T.StreamType.LIVE, VOD: T.StreamType.VOD }),
          (at.ErrorType = {
            ERROR_UNKNOWN: T.ErrorType.ERROR_UNKNOWN,
            ERROR_IO: T.ErrorType.ERROR_IO,
            ERROR_TIMEOUT: T.ErrorType.ERROR_TIMEOUT,
            ERROR_NULL_ASSET: T.ErrorType.ERROR_NULL_ASSET,
            ERROR_MISSING_PARAMETER: T.ErrorType.ERROR_MISSING_PARAMETER,
            ERROR_NO_AD_AVAILABLE: T.ErrorType.ERROR_NO_AD_AVAILABLE,
            ERROR_PARSE: T.ErrorType.ERROR_PARSE,
            ERROR_INVALID_VALUE: T.ErrorType.ERROR_INVALID_VALUE,
            ERROR_INVALID_SLOT: T.ErrorType.ERROR_INVALID_SLOT,
            ERROR_3P_COMPONENT: T.ErrorType.ERROR_3P_COMPONENT,
            ERROR_UNSUPPORTED_3P_FEATURE: T.ErrorType.ERROR_UNSUPPORTED_3P_FEATURE,
            ERROR_DEVICE_LIMIT: T.ErrorType.ERROR_DEVICE_LIMIT,
            ERROR_UNMATCHED_SLOT_SIZE: T.ErrorType.ERROR_UNMATCHED_SLOT_SIZE,
          }),
          (at.Events = {
            AD_REQUESTED: T.Events.AD_REQUESTED,
            AD_RESPONSE: T.Events.AD_RESPONSE,
            AD_SLOT_STARTED: T.Events.AD_SLOT_STARTED,
            AD_ATTEMPTED: T.Events.AD_ATTEMPTED,
            AD_SLOT_ENDED: T.Events.AD_SLOT_ENDED,
            AD_IMPRESSION_START: T.Events.AD_IMPRESSION_START,
            AD_START: T.Events.AD_START,
            AD_FIRST_QUARTILE: T.Events.AD_FIRST_QUARTILE,
            AD_MID_QUARTILE: T.Events.AD_MID_QUARTILE,
            AD_THIRD_QUARTILE: T.Events.AD_THIRD_QUARTILE,
            AD_COMPLETE: T.Events.AD_COMPLETE,
            AD_END: T.Events.AD_END,
            AD_IMPRESSION_END: T.Events.AD_IMPRESSION_END,
            AD_SKIPPED: T.Events.AD_SKIPPED,
            AD_ERROR: T.Events.AD_ERROR,
            AD_PROGRESS: T.Events.AD_PROGRESS,
            AD_CLOSE: T.Events.AD_CLOSE,
            CONTENT_PAUSED: T.Events.CONTENT_PAUSED,
            CONTENT_RESUMED: T.Events.CONTENT_RESUMED,
            POD_START: T.Events.POD_START,
            POD_END: T.Events.POD_END,
          });
        var u = (at.PlayerStateManager = function () {
          var e = this;
          (e.cn = null),
            (e.ln = -2),
            (e.vn = u.PlayerState.UNKNOWN),
            (e.dn = {}),
            (e.En = -2),
            (e.fn = -2),
            (e.hn = -2),
            (e.pn = null),
            (e.Rn = null),
            (e.rn = null),
            (e.wn = null),
            (e.Tn = null),
            (e.Sn = -1),
            (e.gn = -1),
            (e.A = null),
            (e.C = null),
            (e.Nn = null),
            (e.On = []),
            (e.g = !1),
            (this.release = function () {
              e.g ||
                e.w.m('PlayerStateManager.release', function () {
                  e.cn && e.cn._n(), e.An(), (e.v = null), (e.w = null), (e.g = !0);
                });
            }),
            (this.setPlayheadTime = function () {}),
            (this.setBufferLength = function () {}),
            (this.setRenderedFrameRate = function () {}),
            (this.getEncodedFrameRate = function () {
              return e.fn;
            }),
            (this.setEncodedFrameRate = function (n) {
              e.g ||
                e.w.m('PlayerStateManager.setEncodedFrameRate', function () {
                  var t = nt.an(n);
                  t >= -1 && ((e.fn = t), e.cn && e.cn.Cn(e.fn));
                });
            }),
            (this.getDuration = function () {
              return e.hn;
            }),
            (this.setClientMeasureInterface = function (t) {
              Z.In(t, new at.ClientMeasureInterface(), 'ClientMeasureInterface'), (this.yn = t);
            }),
            (this.getPHT = function () {
              return this.yn && 'function' === typeof this.yn.getPHT ? this.yn.getPHT() : u.DEFAULT_PHT;
            }),
            (this.getBufferLength = function () {
              return this.yn && 'function' === typeof this.yn.getBufferLength
                ? this.yn.getBufferLength()
                : u.DEFAULT_BUFFER_LENGTH;
            }),
            (this.getSignalStrength = function () {
              return this.yn && 'function' === typeof this.yn.getSignalStrength
                ? this.yn.getSignalStrength()
                : u.DEFAULT_SIGNAL_STRENGTH;
            }),
            (this.getRenderedFrameRate = function () {
              return this.yn && 'function' === typeof this.yn.getRenderedFrameRate
                ? this.yn.getRenderedFrameRate()
                : u.DEFAULT_RENDERED_FRAME_RATE;
            }),
            (this.setDuration = function (n) {
              e.g ||
                e.w.m('PlayerStateManager.setDuration', function () {
                  var t = nt.an(n);
                  t >= -1 && ((e.hn = t), e.cn && e.cn.mn(e.hn));
                });
            }),
            (this.getStreamUrl = function () {
              return e.rn;
            }),
            (this.setStreamUrl = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setStreamUrl', function () {
                  t && ((e.rn = t), e.cn && e.cn.Dn(e.rn));
                });
            }),
            (this.bn = function () {
              return e.wn;
            }),
            (this.Pn = function () {
              return e.Tn;
            }),
            (this.setModuleNameAndVersion = function (t, n) {
              (e.wn = t), (e.Tn = n);
            }),
            (this.Mn = function () {
              return e.Rn;
            }),
            (this.setPlayerType = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setPlayerType', function () {
                  (e.Rn = t), e.cn && e.cn.Ln(e.Rn);
                });
            }),
            (this.Un = function () {
              return e.pn;
            }),
            (this.setPlayerVersion = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setPlayerVersion', function () {
                  (e.pn = t), e.cn && e.cn.Vn(e.pn);
                });
            }),
            (this.setMonitoringNotifier = function (t) {
              return !e.g && !e.cn && ((e.cn = t), e.c, !0);
            }),
            (this.An = function () {
              e.g || ((e.cn = null), e.c);
            }),
            (this.kn = function () {
              e.setPlayerState(e.getPlayerState()),
                e.setBitrateKbps(e.Fn()),
                e.setDuration(e.getDuration()),
                e.setEncodedFrameRate(e.getEncodedFrameRate()),
                e.setStreamUrl(e.getStreamUrl()),
                e.setPlayerType(e.Mn()),
                e.setPlayerVersion(e.Un());
              for (var t = 0; t < e.On.length; t++) {
                var n = e.On[t];
                e.Hn(n);
              }
              e.On = [];
            }),
            (this.getPlayerState = function () {
              return e.vn;
            }),
            (this.setPlayerState = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setPlayerState', function () {
                  u.Bn(t) && ((e.vn = t), e.cn && e.cn.Gn(e.vn));
                });
            }),
            (this.Fn = function () {
              return e.ln;
            }),
            (this.setBitrateKbps = function (n) {
              e.g ||
                e.w.m('PlayerStateManager.setBitrateKbps', function () {
                  var t = nt.an(n);
                  t >= -1 && ((e.ln = t), e.cn && e.cn.jn(e.ln));
                });
            }),
            (this.setPlayerSeekStart = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setPlayerSeekStart()', function () {
                  e.cn && e.cn.Kn(u.SEEK_ACTIONS_TYPE.SEEK_START, t);
                });
            }),
            (this.setPlayerSeekEnd = function () {
              e.g ||
                e.w.m('PlayerStateManager.setPlayerSeekEnd()', function () {
                  e.cn && e.cn.Kn(u.SEEK_ACTIONS_TYPE.SEEK_END, -1);
                });
            }),
            (this.setUserSeekButtonUp = function () {
              e.g ||
                e.w.m('PlayerStateManager.setUserSeekButtonUp()', function () {
                  e.cn && e.cn.Kn(u.SEEK_ACTIONS_TYPE.BUTTON_UP, -1);
                });
            }),
            (this.setUserSeekButtonDown = function () {
              e.g ||
                e.w.m('PlayerStateManager.setUserSeekButtonDown()', function () {
                  e.cn && e.cn.Kn(u.SEEK_ACTIONS_TYPE.BUTTON_DOWN, -1);
                });
            }),
            (this.setVideoResolutionWidth = function (n) {
              e.g ||
                e.w.m('PlayerStateManager.setVideoResolutionWidth()', function () {
                  var t = nt.an(n);
                  t > 0 && (e.Sn = t), e.cn && e.cn.Wn(e.Sn);
                });
            }),
            (this.setVideoResolutionHeight = function (n) {
              e.g ||
                e.w.m('PlayerStateManager.setVideoResolutionHeight()', function () {
                  var t = nt.an(n);
                  t > 0 && (e.gn = t), e.cn && e.cn.xn(e.gn);
                });
            }),
            (this.setConnectionType = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setConnectionType()', function () {
                  (e.A = t), e.cn && e.cn.W(e.A);
                });
            }),
            (this.setLinkEncryption = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setLinkEncryption()', function () {
                  (e.C = t), e.cn && e.cn.Y(e.C);
                });
            }),
            (this.setSignalStrength = function () {}),
            (this.Hn = function (t) {
              var n, i;
              (e.Nn = t), e.cn ? ((n = t.errorCode), (i = t.severity), e.cn.qn(n, i)) : e.On.push(t);
            }),
            (this.sendError = function (n, i) {
              e.g ||
                e.w.m('PlayerStateManager.sendError', function () {
                  var t = new it(n, i);
                  e.Hn(t);
                });
            }),
            (this.reset = function () {
              e.g ||
                e.w.m('PlayerStateManager.reset', function () {
                  (e.ln = -2),
                    (e.vn = u.PlayerState.UNKNOWN),
                    (e.dn = {}),
                    (e.En = -1),
                    (e.fn = -1),
                    (e.hn = -1),
                    (e.pn = null),
                    (e.Rn = null),
                    (e.rn = null),
                    (e.Nn = null),
                    (e.On = []);
                });
            }),
            (this.setCDNServerIP = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setCDNServerIP', function () {
                  e.cn && e.cn.Yn(t);
                });
            }),
            (this.Jn = function () {
              return e.Xn;
            }),
            (this.setDroppedFramesTotal = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setDroppedFramesTotal', function () {
                  e.cn && e.cn.Qn(t);
                });
            }),
            (this.setDroppedFramesCount = function (t) {
              e.g ||
                e.w.m('PlayerStateManager.setDroppedFramesCount', function () {
                  e.cn && e.cn.Zn(t);
                });
            }),
            (this.zn = function () {
              return e.Nn;
            }),
            function (t, n) {
              (e.v = t), (e.w = e.v.tt(n));
            }.apply(e, arguments);
        });
        (u.PlayerState = {
          STOPPED: T.PlayerState.STOPPED,
          PLAYING: T.PlayerState.PLAYING,
          BUFFERING: T.PlayerState.BUFFERING,
          PAUSED: T.PlayerState.PAUSED,
          UNKNOWN: T.PlayerState.UNKNOWN,
          NOT_MONITORED: T.PlayerState.NOT_MONITORED,
        }),
          (u.Bn = function (t) {
            return (
              t === u.PlayerState.STOPPED ||
              t === u.PlayerState.PLAYING ||
              t === u.PlayerState.BUFFERING ||
              t === u.PlayerState.PAUSED ||
              t === u.PlayerState.UNKNOWN ||
              t === u.PlayerState.NOT_MONITORED
            );
          }),
          (u.SEEK_ACTIONS_TYPE = { SEEK_START: 'pss', SEEK_END: 'pse', BUTTON_UP: 'bu', BUTTON_DOWN: 'bd' }),
          (u.DEFAULT_SIGNAL_STRENGTH = 1e3),
          (u.DEFAULT_RENDERED_FRAME_RATE = -1),
          (u.DEFAULT_BUFFER_LENGTH = -1),
          (u.DEFAULT_PHT = -1),
          (at.ClientMeasureInterface = function () {
            (this.getPHT = function () {}),
              (this.getBufferLength = function () {}),
              (this.getSignalStrength = function () {}),
              (this.getRenderedFrameRate = function () {});
          });
        var r = (at.HttpInterface = function () {
            (this.makeRequest = function () {}), (this.release = function () {});
          }),
          h = (at.LoggingInterface = function () {
            (this.consoleLog = function () {}), (this.release = function () {});
          }),
          l = (at.MetadataInterface = function () {
            (this.getBrowserName = function () {}),
              (this.getBrowserVersion = function () {}),
              (this.getDeviceBrand = function () {}),
              (this.getDeviceManufacturer = function () {}),
              (this.getDeviceModel = function () {}),
              (this.getDeviceType = function () {}),
              (this.getDeviceVersion = function () {}),
              (this.getFrameworkName = function () {}),
              (this.getFrameworkVersion = function () {}),
              (this.getOperatingSystemName = function () {}),
              (this.getOperatingSystemVersion = function () {}),
              (this.getDeviceCategory = function () {}),
              (this.getScreenWidth = function () {}),
              (this.getScreenHeight = function () {}),
              (this.getScaleFactor = function () {}),
              (this.release = function () {});
          }),
          v = (at.StorageInterface = function () {
            (this.saveData = function () {}), (this.loadData = function () {}), (this.release = function () {});
          }),
          d = (at.SystemInterface = function () {
            (function (t, n, i, e, s, o) {
              Z.In(t, new E(), 'TimeInterface'),
                Z.In(n, new p(), 'TimerInterface'),
                Z.In(i, new r(), 'HttpInterface'),
                Z.In(e, new v(), 'StorageInterface'),
                Z.In(s, new l(), 'MetadataInterface'),
                Z.In(o, new h(), 'LoggingInterface'),
                (this.$n = t),
                (this.ti = n),
                (this.ni = i),
                (this.ii = e),
                (this.ei = s),
                (this.si = o);
            }).apply(this, arguments),
              (this.release = function () {
                this.$n && (this.$n.release(), (this.$n = null)),
                  this.ti && (this.ti.release(), (this.ti = null)),
                  this.ni && (this.ni.release(), (this.ni = null)),
                  this.ii && (this.ii.release(), (this.ii = null)),
                  this.ei && (this.ei.release(), (this.ei = null)),
                  this.si && (this.si.release(), (this.si = null));
              });
          }),
          E = (at.TimeInterface = function () {
            (this.getEpochTimeMs = function () {}), (this.release = function () {});
          }),
          p = (at.TimerInterface = function () {
            (this.createTimer = function () {}), (this.release = function () {});
          }),
          R = (at.SystemFactory = function () {
            var t = this;
            (function (t, n) {
              if (!(t instanceof d))
                throw new Error('systemInterface parameter should be an instance of SystemInterface.');
              (this.oi = t),
                (this.$n = this.oi.$n),
                (this.ti = this.oi.ti),
                (this.ni = this.oi.ni),
                (this.ii = this.oi.ii),
                (this.ei = this.oi.ei),
                (this.si = this.oi.si),
                (this.p = n instanceof w ? n.z() : new w());
            }).apply(this, arguments),
              (this.$ = function (t, n, i) {
                (this.ri = t), (this.ui = n), (this.hi = i);
              }),
              (this.release = function () {
                this.oi.release(), (this.oi = null), (this.ri = null), (this.p = null), (this.ai = null);
              });
            var n = function () {
              return new st(t.si, t.$n, t.Ut(), t.ai, t.ri);
            };
            (this.buildLogger = function () {
              return n();
            }),
              (this.rt = function (t, n, i) {
                return new x(t, n, i, this);
              }),
              (this.fi = function (t) {
                return new $(this.buildLogger(), this.ci(), this.ui, t);
              }),
              (this.li = function () {
                return new q(this.buildTimer(t.hi));
              }),
              (this.vi = function () {
                var t = new ut(this.buildLogger(), this.ti, new X(this.buildLogger(), null, this.Ut()));
                return new q(t);
              }),
              (this.ci = function () {
                return new et(this.buildLogger(), this.ni, this.vi(), this.Ut());
              }),
              (this.tt = function (t) {
                return new X(this.buildLogger(), this.fi(t), this.Ut());
              }),
              (this.buildTime = function () {
                return new rt(this.$n, this.buildLogger());
              }),
              (this.buildTimer = function (t) {
                return new ut(this.buildLogger(), this.ti, this.tt(t));
              }),
              (this.di = function () {
                return new ht.Storage(this.buildLogger(), this.ii, this.li(), this.Ut());
              }),
              (this.nt = function () {
                return new Y(this.buildLogger(), this.di(), this.Ei());
              }),
              (this.pi = function (t) {
                return new ot(this.buildLogger(), this.ei, this.tt(t));
              }),
              (this.Ri = function () {
                return new B();
              }),
              (this.wi = function (t, n) {
                return new Q(t, this.buildLogger(), this.ci(), this.Ei(), n);
              }),
              (this.Ti = function (t, n, i, e, s) {
                var o = this.wi(n, e.custom['c3.domain']);
                return new K(
                  this.Si(),
                  t,
                  n,
                  this.buildLogger(),
                  this.tt(s),
                  this.buildTimer(s),
                  o,
                  this.Ri(),
                  this.buildTime(),
                  this.gi(),
                  i,
                  e,
                  s,
                );
              }),
              (this.Ni = function (t, n, i, e, s, o, r) {
                o = this.Ti(t, n.z(), i, o, r);
                return new W(e, s, i, this.pi(r), o, this.tt(r), this.buildLogger());
              }),
              (this.Si = function () {
                return new J();
              }),
              (this.Ei = function () {
                return new G();
              }),
              (this.gi = function () {
                return this.ai;
              }),
              (this.Ut = function () {
                return this.p;
              }),
              (this.ai = new z());
          }),
          w = (at.SystemSettings = function () {
            (this.Oi = w._i),
              Z.xt(this, 'logLevel', function () {
                return this.Oi;
              }),
              Z.qt(this, 'logLevel', function (t) {
                var n;
                'number' !== typeof t ||
                  ((n = Z.Xt(t)) === t && n >= w.LogLevel.DEBUG && n <= w.LogLevel.ERROR && (this.Oi = n));
              }),
              (this.Ai = w.Ci),
              Z.xt(this, 'allowUncaughtExceptions', function () {
                return this.Ai;
              }),
              Z.qt(this, 'allowUncaughtExceptions', function (t) {
                Z.Ii(t) && (this.Ai = t);
              }),
              (this.yi = w.mi),
              Z.xt(this, 'storageTimeout', function () {
                return this.yi;
              }),
              Z.qt(this, 'storageTimeout', function (t) {
                var n;
                'number' !== typeof t || ((n = Z.Xt(t)) === t && (this.yi = n));
              }),
              (this.Di = w.bi),
              Z.xt(this, 'httpTimeout', function () {
                return this.Di;
              }),
              Z.qt(this, 'httpTimeout', function (t) {
                var n;
                'number' !== typeof t || ((n = Z.Xt(t)) === t && (this.Di = n));
              }),
              function () {}.apply(this, arguments),
              (this.equals = function (t) {
                return (
                  this.logLevel === t.logLevel &&
                  this.allowUncaughtExceptions === t.allowUncaughtExceptions &&
                  this.storageTimeout === t.storageTimeout &&
                  this.httpTimeout === t.httpTimeout
                );
              }),
              (this.z = function () {
                var t = new w();
                return (
                  (t.logLevel = this.logLevel),
                  (t.allowUncaughtExceptions = this.allowUncaughtExceptions),
                  (t.storageTimeout = this.storageTimeout),
                  (t.httpTimeout = this.httpTimeout),
                  t
                );
              });
          });
        (w.LogLevel = {
          DEBUG: T.LogLevel.DEBUG,
          INFO: T.LogLevel.INFO,
          WARNING: T.LogLevel.WARNING,
          ERROR: T.LogLevel.ERROR,
          NONE: T.LogLevel.NONE,
        }),
          (w.Pi = w.LogLevel.DEBUG),
          (w._i = w.LogLevel.NONE),
          (w.Mi = !0),
          (w.Ci = !1),
          (w.mi = 10),
          (w.bi = 10);
        var i = (ht.AdAnalytics = function () {
            var e = this;
            function n(t) {
              e.Li ? (Z.It(t) > 0 && e.setAdInfo(t), e.Li.Ui() || (e.Li.Vi(e.ki), e.Li.Fi(!0))) : e.c;
            }
            (e.Hi = null),
              (e.v = null),
              (e.Bi = null),
              (e.ki = null),
              (e.Li = null),
              (e.Gi = null),
              (e.ji = null),
              (e.Ki = null),
              function (t, n, i) {
                (e.Hi = t),
                  (e.Ki = i),
                  (e.v = n),
                  i && (e.ki = i.Wi()),
                  (e.Bi = n.buildTimer(T.version)),
                  (e.Li = new o(e.Hi, e.Bi)),
                  g.call(this);
              }.apply(this, arguments),
              (this.setAdInfo = function (t) {
                Z.It(t) <= 0 ? e.c : (e.c, e.Li && e.Li.xi(t));
              }),
              (this.setAdPlayerInfo = function (t) {
                Z.It(t) <= 0 ? e.c : (e.c, e.Li && e.Li.xi(t));
              }),
              (this.reportAdMetric = function () {
                0 !== arguments.length
                  ? 1 === arguments.length
                    ? e.qi(arguments[0])
                    : 2 === arguments.length
                    ? e.qi(arguments[0], arguments[1])
                    : 3 === arguments.length
                    ? e.qi(arguments[0], arguments[1], arguments[2])
                    : 4 === arguments.length && e.qi(arguments[0], arguments[1], arguments[2], arguments[3])
                  : e.c;
              }),
              (this.setCallback = function (t) {
                e.Li && e.Li.Yi(t);
              }),
              (this.reportAdFailed = function (t, n) {
                e.Li
                  ? (Z.It(n) > 0 && e.setAdInfo(n),
                    e.Li.Ui()
                      ? (e.c, e.reportAdError(t, a.ErrorSeverity.FATAL), e.reportAdEnded())
                      : (e.Li.Vi(e.ki), e.c, (t = new it(t, a.ErrorSeverity.FATAL)), e.Li.Fi(!0, t)))
                  : e.c;
              }),
              (this.reportAdLoaded = function (t) {
                e.c, n(t);
              }),
              (this.reportAdStarted = function (t) {
                e.c, n(t);
              }),
              (this.reportAdEnded = function () {
                e.Li ? (e.c, e.Li.Ui() && (e.Li.Vi(null), e.Li.Fi(!1))) : e.c;
              }),
              (this.reportAdError = function (t, n) {
                e.Li ? (e.c, (n = new it(t, n)), e.Li.Hn(n)) : e.c;
              }),
              (this.reportAdPlayerEvent = function (t, n) {
                if (Z.wt(t))
                  if ((e.c, 0, e.Li))
                    switch (t) {
                      case T.Events.USER_WAIT_STARTED:
                      case T.Events.BUMPER_VIDEO_STARTED:
                        e.Li.gt();
                        break;
                      case T.Events.USER_WAIT_ENDED:
                      case T.Events.BUMPER_VIDEO_ENDED:
                        e.Li.Ot();
                        break;
                      default:
                        e.Li.Ji(t, n);
                    }
                  else e.c;
                else e.c;
              }),
              (this.reportAdSkipped = function () {
                e.Li ? (e.c, e.reportAdPlayerEvent(T.Events.AD_SKIPPED), e.reportAdEnded()) : e.c;
              }),
              (this.release = function () {
                e.c,
                  e.Li && (e.Li.Ui() && (e.Li.Vi(null), e.Li.Fi(!1)), e.Li.Yi(null), e.Li.Xi(), (e.Li = null)),
                  'undefined' !== typeof at.AdProxyMonitor && e.ji && (at.AdProxyMonitor.release(e.ji), (e.ji = null));
              }),
              (this.setAdListener = function (t, n) {
                t &&
                  ('undefined' !== typeof n && 'undefined' !== typeof n.convivaModule
                    ? (at.AdProxyMonitor = n.convivaModule.AdProxyMonitor)
                    : 'undefined' !== typeof ConvivaModule && (at.AdProxyMonitor = ConvivaModule.AdProxyMonitor),
                  'undefined' !== typeof at.AdProxyMonitor &&
                    (!t && e.ji
                      ? (at.AdProxyMonitor.release(e.ji), (e.ji = null))
                      : t && e.ji
                      ? (at.AdProxyMonitor.release(e.ji),
                        e.c,
                        (e.ji = at.AdProxyMonitor.initConvivaDropIn(t, n, this, at, e.v)))
                      : t && !e.ji && (e.c, (e.ji = at.AdProxyMonitor.initConvivaDropIn(t, n, this, at, e.v)))));
              }),
              (this.reportAdBreakStarted = function (t, n, i) {
                e.ki && (e.c, (e.Qi = t), (e.Gi = n), e.ki.Zi(t, n, i));
              }),
              (this.reportAdBreakEnded = function () {
                e.ki && (e.c, (e.Qi = null), (e.Gi = null), e.ki.zi());
              }),
              (this.getSessionId = function () {
                return e.ki ? (e.c, e.Li.Vt()) : T.NO_SESSION_KEY;
              }),
              (this.getClientId = function () {
                return e.ki ? (e.c, e.Li.kt()) : null;
              }),
              (this.getPlayerMonitor = function () {
                return e.ki;
              }),
              (this.getAdPlayerMonitor = function () {
                return e.Li;
              }),
              (this.getVideoAnalytics = function () {
                return e.Ki;
              }),
              (this.getAdType = function () {
                return e.ki ? e.ki.Qi : null;
              }),
              (this.$i = function () {
                return e.ki ? e.ki.Gi : null;
              }),
              (i.prototype = Object.create(g.prototype)),
              (i.prototype.constructor = i);
          }),
          o = (ht.AdPlayerMonitorImpl = function () {
            var s = this;
            (s.te = null),
              (s.ne = null),
              function (t, n) {
                N.call(this, t, n);
              }.apply(this, arguments),
              (this.Vi = function (t) {
                this.ie() !== t && (this.ee(), (s.ne = t || null));
              }),
              (this.ie = function () {
                return s.ne;
              }),
              (this.se = function (t) {
                var n,
                  i = this.ie(),
                  e = {};
                (e.error = t),
                  s.te &&
                    ((s.oe = s.te.getPlayerStateManager(!0)),
                    s.re(),
                    s.oe.setClientMeasureInterface(this),
                    (n = null),
                    i && (n = i.ue()),
                    (s.he = s.te.createAdSession(n, s.Et, s.oe, !0, e)),
                    'undefined' !== typeof t && (s.ae(), s.Xi()));
              }),
              (o.prototype = Object.create(N.prototype)),
              (o.prototype.constructor = o);
          }),
          S = (at.Analytics = {
            init: function (t, n, i) {
              if ((this.Hi, 0, arguments.length <= 0)) throw new Error('customerKey must be valid');
              var e = null,
                s = null,
                o = null;
              if ('string' === typeof t && ((e = t), !Z.wt(e))) throw new Error('customerKey must be valid');
              arguments.length >= 2 && 'object' === typeof n && (s = n),
                arguments.length >= 3 && 'object' === typeof i && (o = i);
              var r = new f(e),
                u = new w();
              Z.It(o) > 0 &&
                (o[T.GATEWAY_URL] && (r.gatewayUrl = o[T.GATEWAY_URL]),
                o[T.LOG_LEVEL] >= 0 && (u.logLevel = o[T.LOG_LEVEL]));
              (t = new at.Impl.Html5Logging()),
                (n = new at.Impl.Html5Storage()),
                (i = new at.Impl.Html5Http()),
                (e = new at.Impl.Html5Timer()),
                (o = new at.Impl.Html5Time());
              this.ei || (this.ei = new at.Impl.Html5Metadata()),
                s &&
                  (s[T.CallbackFunctions.CONSOLE_LOG] && (t.consoleLog = s[T.CallbackFunctions.CONSOLE_LOG]),
                  s[T.CallbackFunctions.MAKE_REQUEST] && (i.makeRequest = s[T.CallbackFunctions.MAKE_REQUEST]),
                  s[T.CallbackFunctions.SAVE_DATA] && (n.saveData = s[T.CallbackFunctions.SAVE_DATA]),
                  s[T.CallbackFunctions.LOAD_DATA] && (n.loadData = s[T.CallbackFunctions.LOAD_DATA]),
                  s[T.CallbackFunctions.GET_EPOCH_TIME_IN_MS] &&
                    (o.getEpochTimeMs = s[T.CallbackFunctions.GET_EPOCH_TIME_IN_MS]),
                  s[T.CallbackFunctions.CREATE_TIMER] && (e.createTimer = s[T.CallbackFunctions.CREATE_TIMER])),
                (this.oi = new d(o, e, i, n, this.ei, t)),
                (this.v = new R(this.oi, u)),
                this.v.$('Analytics', r),
                (this.Hi = new a(r, this.v, this.fe, S.version));
            },
            release: function () {
              var t = 0;
              if (this.ce) {
                for (t = 0; t < this.ce.length; t++) {
                  var n = this.ce[t];
                  n && (n.release(), (n.c = null), (n.Bi = null), this.ce.splice(t, 1), t--);
                }
                this.ce = null;
              }
              if (this.le) {
                for (t = 0; t < this.le.length; t++) {
                  var i = this.le[t];
                  i && (i.release(), (i.c = null), (i.Bi = null), this.le.splice(t, 1), t--);
                }
                this.le = null;
              }
              this.v && (this.v.release(), (this.v = null)),
                this.Hi && (this.Hi.release(), (this.Hi = null)),
                (this.Hi = null),
                (this.c = null),
                (this.oi = null),
                (this.ei = null),
                (this.fe = null);
            },
            setUniqueIdentifier: function (t, n) {
              if (!this.Hi) throw new Error(T.i);
              this.Hi.setUniqueIdentifier(t, n);
            },
            setUserPreferenceForDataCollection: function (t, n) {
              if (!this.Hi) throw new Error(T.i);
              this.Hi.setUserPreferenceForDataCollection(t, n);
            },
            setUserPreferenceForDataDeletion: function (t) {
              if (!this.Hi) throw new Error(T.i);
              this.Hi.setUserPreferenceForDataDeletion(t);
            },
            reportAppEvent: function (t, n) {
              if (!this.Hi) throw new Error(T.i);
              this.Hi.sendCustomEvent(a.NO_SESSION_KEY, t, n);
            },
            reportAppBackgrounded: function () {
              if (!this.Hi) throw new Error(T.i);
              this.Hi.sendCustomEvent(a.NO_SESSION_KEY, 'App.Backgrounded', null);
            },
            reportAppForegrounded: function () {
              if (!this.Hi) throw new Error(T.i);
              this.Hi.sendCustomEvent(a.NO_SESSION_KEY, 'App.Foregrounded', null);
            },
            configureExistingClient: function (t) {
              if (!(t instanceof a)) throw new Error(T.i);
              (this.Hi = t), (this.v = this.Hi.v);
            },
            buildVideoAnalytics: function () {
              if (!this.Hi) throw new Error(T.i);
              var t = new C(this.Hi, this.v);
              return this.le || (this.le = []), this.le.push(t), t;
            },
            buildAdAnalytics: function (t) {
              if (!this.Hi) throw new Error(T.i);
              t = new i(this.Hi, this.v, t || null);
              return this.ce || (this.ce = []), this.ce.push(t), t;
            },
            setDeviceMetadata: function (t) {
              var n, i, e;
              arguments.length <= 0 ||
                0 === Z.It(t) ||
                (this.ei || (this.ei = new at.Impl.Html5Metadata()),
                t[T.DeviceMetadata.BRAND] &&
                  (this.ei.getDeviceBrand = function () {
                    return t[T.DeviceMetadata.BRAND];
                  }),
                t[T.DeviceMetadata.MANUFACTURER] &&
                  (this.ei.getDeviceManufacturer = function () {
                    return t[T.DeviceMetadata.MANUFACTURER];
                  }),
                t[T.DeviceMetadata.MODEL] &&
                  (this.ei.getDeviceModel = function () {
                    return t[T.DeviceMetadata.MODEL];
                  }),
                t[T.DeviceMetadata.TYPE] &&
                  (this.ei.getDeviceType = function () {
                    return t[T.DeviceMetadata.TYPE];
                  }),
                t[T.DeviceMetadata.VERSION] &&
                  (this.ei.getDeviceVersion = function () {
                    return t[T.DeviceMetadata.VERSION];
                  }),
                t[T.DeviceMetadata.OS_NAME] &&
                  (this.ei.getOperatingSystemName = function () {
                    return t[T.DeviceMetadata.OS_NAME];
                  }),
                t[T.DeviceMetadata.OS_VERSION] &&
                  (this.ei.getOperatingSystemVersion = function () {
                    return t[T.DeviceMetadata.OS_VERSION];
                  }),
                t[T.DeviceMetadata.CATEGORY] &&
                  (this.ei.getDeviceCategory = function () {
                    return t[T.DeviceMetadata.CATEGORY];
                  }),
                (n = t[T.DeviceMetadata.SCREEN_RESOLUTION_WIDTH]),
                Z.lt(n) &&
                  (this.ei.getScreenWidth = function () {
                    return n.toString();
                  }),
                (i = t[T.DeviceMetadata.SCREEN_RESOLUTION_HEIGHT]),
                Z.lt(i) &&
                  (this.ei.getScreenHeight = function () {
                    return i.toString();
                  }),
                (e = t[T.DeviceMetadata.SCREEN_RESOLUTION_SCALE_FACTOR]),
                Z.lt(e) &&
                  (this.ei.getScaleFactor = function () {
                    return e.toString();
                  }));
            },
            reportDeviceMetric: function (t, n) {
              switch ((this.fe || (this.fe = {}), t)) {
                case T.Network.CONNECTION_TYPE:
                  if (!Z.wt(n)) return void 0;
                  (this.fe[t] = n), this.Hi && this.Hi.j(this.fe[T.Network.CONNECTION_TYPE]);
                  break;
                case T.Network.LINK_ENCRYPTION:
                  if (!Z.wt(n)) return void 0;
                  (this.fe[t] = n), this.Hi && this.Hi.q(this.fe[T.Network.LINK_ENCRYPTION]);
                  break;
                case T.Network.SIGNAL_STRENGTH:
                  var i = parseInt(n, 10);
                  if (!Z.lt(i)) return void 0;
                  if (u.DEFAULT_SIGNAL_STRENGTH === i) return void 0;
                  (this.fe[t] = i), this.Hi && this.Hi.J(i);
                  break;
                default:
                  0;
              }
            },
          });
        S.version = '4.5.8';
        var g = (ht.AnalyticsImpl = function () {
          var a = this;
          function f() {
            var t = !!a.Li,
              n = a.getAdType(),
              i = a.$i();
            return n === T.AdType.SERVER_SIDE && i === T.AdPlayer.CONTENT
              ? g.de.ve
              : n !== T.AdType.SERVER_SIDE || i !== T.AdPlayer.SEPARATE
              ? n === T.AdType.CLIENT_SIDE && i === T.AdPlayer.CONTENT
                ? g.de.Ee
                : (n === T.AdType.CLIENT_SIDE && T.AdPlayer.SEPARATE, t ? g.de.Ee : g.de.pe)
              : void 0;
          }
          function c(t, n, i) {
            (t = parseInt(t, 10)), (n = parseInt(n, 10));
            (isNaN(t) && isNaN(n)) ||
              (isNaN(t),
              isNaN(n),
              !a.Li || (i !== g.de.Ee && i !== g.de.ve) || a.Li.Re(t, n),
              !a.ki || (i !== g.de.pe && i !== g.de.ve) || a.ki.Re(t, n));
          }
          function l(t, n) {
            u.Bn(t) &&
              (!a.Li || (n !== g.de.Ee && n !== g.de.ve) || a.Li.we(t),
              ((a.ki && n === g.de.pe) || n === g.de.ve) && a.ki.we(t));
          }
          function v(t, n) {
            t = parseInt(t, 10);
            isNaN(t) ||
              (!a.Li || (n !== g.de.Ee && n !== g.de.ve) || a.Li.Te(t),
              !a.ki || (n !== g.de.pe && n !== g.de.ve) || a.ki.Te(t));
          }
          function d(t, n) {
            t = parseInt(t, 10);
            isNaN(t) ||
              (!a.Li || (n !== g.de.Ee && n !== g.de.ve) || a.Li.Se(t),
              !a.ki || (n !== g.de.pe && n !== g.de.ve) || a.ki.Se(t));
          }
          function E(t, n) {
            t = parseInt(t, 10);
            !a.Li || (n !== g.de.Ee && n !== g.de.ve) || a.Li.ge(!0, t),
              !a.ki || (n !== g.de.pe && n !== g.de.ve) || a.ki.ge(!0, t);
          }
          function p(t) {
            !a.Li || (t !== g.de.Ee && t !== g.de.ve) || a.Li.ge(!1, -1),
              !a.ki || (t !== g.de.pe && t !== g.de.ve) || a.ki.ge(!1, -1);
          }
          function R(t, n) {
            t = parseInt(t, 10);
            isNaN(t) ||
              (!a.Li || (n !== g.de.Ee && n !== g.de.ve) || a.Li.Ne(t),
              !a.ki || (n !== g.de.pe && n !== g.de.ve) || a.ki.Ne(t));
          }
          function w(t, n) {
            t = parseInt(t, 10);
            isNaN(t) ||
              (!a.Li || (n !== g.de.Ee && n !== g.de.ve) || a.Li.Oe(t),
              !a.ki || (n !== g.de.pe && n !== g.de.ve) || a.ki.Oe(t));
          }
          (function () {}).apply(this, arguments),
            (this.qi = function (t, n, i, e) {
              switch ((0, t)) {
                case T.Playback.BITRATE:
                  0, e === g.de.Ee ? R(n, g.de.Ee) : R(n, f());
                  break;
                case T.Playback.PLAY_HEAD_TIME:
                  e === g.de.Ee ? v(n, g.de.Ee) : v(n, f());
                  break;
                case T.Playback.RESOLUTION:
                  e === g.de.Ee ? c(n, i, g.de.Ee) : c(n, i, f());
                  break;
                case T.Playback.BUFFER_LENGTH:
                  e === g.de.Ee ? d(n, g.de.Ee) : d(n, f());
                  break;
                case T.Playback.PLAYER_STATE:
                  e === g.de.Ee ? l(n, g.de.Ee) : l(n, f());
                  break;
                case T.Playback.RENDERED_FRAMERATE:
                  e === g.de.Ee ? w(n, g.de.Ee) : w(n, f());
                  break;
                case T.Playback.SEEK_STARTED:
                  arguments.length >= 2 && 'CONVIVA' !== n ? E(n, f()) : i === g.de.Ee ? E(-1, g.de.Ee) : E(-1, f());
                  break;
                case T.Playback.SEEK_ENDED:
                  i === g.de.Ee ? p(g.de.Ee) : p(f());
                  break;
                case T.Playback.CDN_IP:
                  0,
                    (u = n),
                    (h = f()),
                    Z.wt(u) &&
                      (!a.Li || (h !== g.de.Ee && h !== g.de.ve) || a.Li._e(u),
                      !a.ki || (h !== g.de.pe && h !== g.de.ve) || a.ki._e(u));
                  break;
                case T.Playback.DROPPED_FRAMES_TOTAL:
                  0,
                    (r = n),
                    (u = f()),
                    (r = parseInt(r, 10)),
                    isNaN(r) ||
                      (!a.Li || (u !== g.de.Ee && u !== g.de.ve) || a.Li.Ae(r),
                      !a.ki || (u !== g.de.pe && u !== g.de.ve) || a.ki.Ae(r));
                  break;
                case T.Playback.DROPPED_FRAMES_COUNT:
                  0,
                    (s = n),
                    (o = f()),
                    (s = parseInt(s, 10)),
                    isNaN(s) ||
                      (!a.Li || (o !== g.de.Ee && o !== g.de.ve) || a.Li.Ce(s),
                      !a.ki || (o !== g.de.pe && o !== g.de.ve) || a.ki.Ce(s));
                  break;
                default:
                  (r = t),
                    (o = n),
                    (s = f()),
                    !void (
                      Z.wt(r) &&
                      o &&
                      (!a.Li || (s !== g.de.Ee && s !== g.de.ve) || a.Li.Ft(r, o),
                      !a.ki || (s !== g.de.pe && s !== g.de.ve) || a.ki.Ft(r, o))
                    );
              }
              var s, o, r, u, h;
            });
        });
        ht.AnalyticsImpl.de = { Ee: 1, pe: 2, ve: 3 };
        var e = (ht.PlayerMonitor = function () {
            var e = this;
            (this.Ie = null),
              (this.ye = null),
              (this.Et = null),
              (this.me = null),
              (this.vn = u.PlayerState.UNKNOWN),
              (this.De = -1),
              (this.be = -1),
              (this.On = []),
              (this.Pe = null),
              (this.Me = null),
              (this.Le = -2),
              (this.En = -1),
              (this.I = u.DEFAULT_SIGNAL_STRENGTH),
              (this.Ue = null),
              (this.Xn = null),
              (this.C = null),
              (this.A = null),
              (this.Bi = null),
              (this.Ve = null),
              (this.ke = null),
              (this.Fe = null),
              (this.He = null),
              (this.Qi = null),
              (this.Gi = null),
              function (t) {
                e.Bi = t;
              }.apply(this, arguments),
              (this.Be = function () {
                return e.vn;
              }),
              (this.we = function (t) {
                e.vn !== t && (e.ee(), (e.vn = t), e.Ge());
              }),
              (this.je = function () {
                return e.Ke;
              }),
              (this.We = function () {
                return e.xe;
              }),
              (this.ge = function (t, n) {
                e.ee(), (e.Ke = t), (e.xe = n), e.qe();
              }),
              (this.Ye = function () {
                return e.De;
              }),
              (this.Te = function (t) {
                e.De = t;
              }),
              (this.Je = function () {
                return e.be;
              }),
              (this.Se = function (t) {
                e.be = t;
              }),
              (this.Xe = function () {
                return e.Le;
              }),
              (this.Ne = function (t) {
                e.Le !== t && ((e.Le = t), e.Ge());
              }),
              (this.Qe = function () {
                return e.En;
              }),
              (this.Oe = function (t) {
                e.En = t;
              }),
              (this.Ze = function () {
                return e.Ue;
              }),
              (this._e = function (t) {
                (e.Ue = t), e.Ge();
              }),
              (this.Jn = function () {
                return e.Xn;
              }),
              (this.Ae = function (t) {
                (e.Xn = t), e.Ge();
              }),
              (this.Ce = function (t) {
                e.ze(t);
              }),
              (this.$e = function () {
                return e.I;
              }),
              (this.ts = function () {
                return e.ns;
              }),
              (this.es = function () {
                return e.ss;
              }),
              (this.Re = function (t, n) {
                t < 0 && (t = 0), n < 0 && (n = 0), (e.ns === t && e.ss === n) || ((e.ns = t), (e.ss = n), e.Ge());
              }),
              (this.os = function () {
                return e.ye;
              }),
              (this.rs = function () {
                e.os() && ((e.Et = new c()), (e.me = {}), (e.ke = {}), e.us());
              }),
              (this.hs = function (t) {
                (e.ye || t) && (this.ee(), e.ye && ((e.ye = null), e.rs()), t && ((e.ye = Z.as(e.ye, t)), e.rs()));
              }),
              (this.xi = function (t) {
                if (t)
                  if (e.Et) {
                    var n,
                      i = !1;
                    for (n in t)
                      if (e.Et[n] !== t[n]) {
                        i = !0;
                        break;
                      }
                    i && (e.ee(), (e.ye = Z.as(t)), e.us());
                  } else e.hs(t);
              }),
              (this.Yi = function (t) {
                t ? e.Fe !== t && ((e.Fe = t), e.fs()) : ((e.Fe = null), e.ae());
              }),
              (this.ee = function () {
                e.cs || (e.Fe && ((e.cs = !0), e.Fe(), (e.cs = !1)));
              }),
              (this.Ui = function () {
                return e.Ie;
              }),
              (this.Fi = function (t, n) {
                e.Ie !== t && (e.ee(), e.Ie && (e.ls(), e.ae(), e.Xi()), (e.Ie = t), e.Ie && e.se(n));
              }),
              (this.vs = function () {
                return e.Pe;
              }),
              (this.ds = function () {
                return e.Me || null;
              }),
              (this.Es = function () {
                return e.On;
              }),
              (this.ps = function () {
                e.On = [];
              }),
              (this.Hn = function (t) {
                this.ee(), e.On.push(t), e.qn();
              }),
              (this.Ji = function (t, n) {
                e.ee(), (e.Pe = t), (e.Me = n), e.Rs();
              }),
              (this.ws = function () {
                e.ee();
              }),
              (this.fs = function () {
                e.ae(), (e.Ve = e.Bi.create(e.ws, 1e3, 'PlayerMonitor.update'));
              }),
              (this.ae = function () {
                e.Ve && (e.Ve(), (e.Ve = null));
              }),
              (this.Zi = function (t, n, i) {
                (e.He = i),
                  (e.Qi = t),
                  e.Ts(),
                  (e.Gi = n),
                  e.Qi &&
                    T.AdType.CLIENT_SIDE === e.Qi &&
                    ((e.vn = T.PlayerState.UNKNOWN), e.Ss(e.Qi, n, i ? i[T.POD_POSITION] : null));
              }),
              (this.zi = function () {
                e.Qi && T.AdType.CLIENT_SIDE === e.Qi && (e.gs(), (e.vn = T.PlayerState.UNKNOWN)),
                  e.Ns(),
                  (e.Qi = null),
                  (e.Gi = null);
              }),
              (this.Os = function () {
                return e.He;
              }),
              (this._s = function () {
                return e.Qi;
              }),
              (this.getContentMetadata = function () {
                return this.Et;
              }),
              (this.Xi = function () {
                (this.Ie = null),
                  (this.ye = null),
                  (this.Et = null),
                  (this.me = null),
                  (this.vn = u.PlayerState.UNKNOWN),
                  (this.De = -1),
                  (this.be = -1),
                  (this.On = []),
                  (this.Pe = null),
                  (this.Me = null),
                  (this.Le = -2),
                  (this.En = -1),
                  (this.I = u.DEFAULT_SIGNAL_STRENGTH),
                  (this.Ue = null),
                  (this.Xn = null),
                  (this.C = null),
                  (this.A = null),
                  (this.Bi = null),
                  (this.Ve = null),
                  (this.ke = null),
                  (this.Fe = null),
                  (this.He = null),
                  (this.Qi = null),
                  (this.Gi = null),
                  (e.oe = null),
                  (e.he = a.NO_SESSION_KEY);
              });
          }),
          N = (ht.PlayerMonitorImpl = function () {
            var r = this;
            (r.te = null),
              (r.oe = null),
              (r.he = a.NO_SESSION_KEY),
              function (t, n) {
                e.call(this, n), (r.te = t);
              }.apply(this, arguments),
              (this.getPHT = function () {
                return r.Ye();
              }),
              (this.getBufferLength = function () {
                return r.Je();
              }),
              (this.getRenderedFrameRate = function () {
                return r.Qe();
              }),
              (this.getSignalStrength = function () {
                return r.$e();
              }),
              (this.qe = function () {
                r.oe &&
                  r.As !== a.NO_SESSION_KEY &&
                  (r.je() ? r.oe.setPlayerSeekStart(r.We()) : r.oe.setPlayerSeekEnd());
              }),
              (this.Ge = function () {
                r.oe &&
                  (r.oe.setPlayerState(r.Be()),
                  r.Xe() > 0 && r.oe.setBitrateKbps(r.Xe()),
                  r.ts() > 0 && r.oe.setVideoResolutionWidth(r.ts()),
                  r.es() > 0 && r.oe.setVideoResolutionHeight(r.es()),
                  r.Ze() && r.oe.setCDNServerIP(r.Ze()),
                  Z.lt(r.Jn()) && r.oe.setDroppedFramesTotal(r.Jn()));
              }),
              (this.St = function () {
                r.he !== a.NO_SESSION_KEY && r.te && r.te.updateContentMetadata(r.he, r.Et);
              }),
              (this.re = function () {
                if (r.oe) {
                  var t, n, i;
                  r.ke &&
                    Z.It(r.ke) > 0 &&
                    (r.ke[T.MODULE_NAME] &&
                      r.ke[T.MODULE_VERSION] &&
                      ((t = r.ke[T.MODULE_NAME]),
                      (n = r.ke[T.MODULE_VERSION]),
                      Z.wt(t) && Z.wt(n) && r.oe.setModuleNameAndVersion(t, n)),
                    r.ke[T.FRAMEWORK_NAME] && ((i = r.ke[T.FRAMEWORK_NAME]), Z.wt(i) && r.oe.setPlayerType(i)),
                    r.ke[T.FRAMEWORK_VERSION] &&
                      ((i = r.ke[T.FRAMEWORK_VERSION]), Z.wt(i) && r.oe.setPlayerVersion(i)));
                  var e = r.Es();
                  r.ps();
                  for (var s = 0; s < e.length; s++) {
                    var o = e[s];
                    r.oe.Hn(o);
                  }
                }
              }),
              (this.gs = function () {
                r.oe && r.he !== a.NO_SESSION_KEY && (r.Ge(), this.Cs());
              }),
              (this.Ot = function () {
                r.oe && r.he !== a.NO_SESSION_KEY && (r.Ge(), r.te._t(r.he));
              }),
              (this.Cs = function () {
                r.te && r.he !== T.NO_SESSION_KEY && r.te.adEnd(r.he);
              }),
              (this.Ss = function (t, n, i) {
                var e;
                r.oe &&
                  r.he !== T.NO_SESSION_KEY &&
                  ((e = null),
                  T.AdType.CLIENT_SIDE === t
                    ? (e = a.AdStream.SEPARATE)
                    : T.AdType.SERVER_SIDE === t && (e = a.AdStream.CONTENT),
                  r.Is(e, n, i));
              }),
              (this.gt = function () {
                r.oe && r.he !== T.NO_SESSION_KEY && r.te.Nt(r.he);
              }),
              (this.Is = function (t, n, i) {
                r.te && r.he !== T.NO_SESSION_KEY && r.te.adStart(r.he, t, n, i);
              }),
              (this.se = function () {
                if (r.te) {
                  (r.oe = r.te.getPlayerStateManager(!0)), r.re(), r.oe.setClientMeasureInterface(this);
                  try {
                    var t;
                    r.Et &&
                      r.Et.custom &&
                      !r.Et.custom[T.UTM_TRACKING_URL] &&
                      (Array.prototype.filter ||
                        (Array.prototype.filter = function (t) {
                          if (void 0 === this || null === this) throw new TypeError();
                          var n = Object(this),
                            i = n.length >>> 0;
                          if ('function' !== typeof t) throw new TypeError();
                          for (var e, s = [], o = arguments.length >= 2 ? arguments[1] : void 0, r = 0; r < i; r++)
                            r in n && ((e = n[r]), t.call(o, e, r, n) && s.push(e));
                          return s;
                        }),
                      '' !==
                        (t = Z.ys()
                          .split('?')
                          .join('')
                          .split('&')
                          .filter(function (t) {
                            return 2 === t.split('=').length && t.split('=')[0].toLowerCase().indexOf('utm_') >= 0;
                          })
                          .join('&')) && (r.Et.custom[T.UTM_TRACKING_URL] = t));
                  } catch (t) {
                    r.c.error('PlayerMonitorImpl _createSession : ' + t);
                  }
                  r.he = r.te.createSession(r.Et, r.oe, !0);
                }
              }),
              (this.ls = function () {
                r.te &&
                  (r.oe && (r.oe.setPlayerState(T.PlayerState.STOPPED), (r.oe = null)),
                  r.he !== T.NO_SESSION_KEY && (r.te.cleanupSession(r.he), (r.he = T.NO_SESSION_KEY)));
              }),
              (this.qn = function () {
                if (r.te && r.he !== a.NO_SESSION_KEY) {
                  var t = r.Es();
                  r.ps();
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    r.te.reportError(r.he, i.ms(), i.Ds());
                  }
                }
              }),
              (this.Rs = function () {
                r.he !== a.NO_SESSION_KEY && r.te && r.te.sendCustomEvent(r.he, r.vs(), r.ds());
              }),
              (this.us = function () {
                var t,
                  n = r.os(),
                  i = !1,
                  e = !1;
                for (t in n) {
                  var s = n[t];
                  if (Z.wt(t) && null !== s && void 0 !== s)
                    switch (t) {
                      case T.STREAM_URL:
                        (e = !0), (r.Et.streamUrl = s);
                        break;
                      case T.ASSET_NAME:
                        (e = !0), (r.Et.assetName = s);
                        break;
                      case T.DEFAULT_RESOURCE:
                        (e = !0), (r.Et.defaultResource = s);
                        break;
                      case T.VIEWER_ID:
                        (e = !0), (r.Et.viewerId = s);
                        break;
                      case T.PLAYER_NAME:
                        (e = !0), (r.Et.applicationName = s);
                        break;
                      case T.DURATION:
                        (e = !0), (r.Et.duration = s);
                        break;
                      case T.IS_LIVE:
                        (e = !0), (r.Et.streamType = s);
                        break;
                      case T.ENCODED_FRAMERATE:
                        (e = !0), (r.Et.encodedFrameRate = s);
                        break;
                      case T.MODULE_NAME:
                      case T.MODULE_VERSION:
                      case T.FRAMEWORK_NAME:
                      case T.FRAMEWORK_VERSION:
                        (i = !0), (r.ke[t] = s);
                        break;
                      case T.APPLICATION_VERSION:
                      default:
                        (e = !0), (r.Et.custom[t] = s);
                    }
                }
                i && this.re(), e && this.St();
              }),
              (this.Ts = function () {
                this.bs(T.Events.POD_START);
              }),
              (this.Ns = function () {
                this.bs(T.Events.POD_END);
              }),
              (this.bs = function (t) {
                var n, i, e, s;
                r.te &&
                  r.he !== T.NO_SESSION_KEY &&
                  ((i = {}),
                  (n = this.Os()) &&
                    ((e = n[T.POD_POSITION]) && (i[T.POD_POSITION] = e),
                    (e = n[T.POD_INDEX]) && (i[T.POD_INDEX] = e + ''),
                    t !== T.Events.POD_START || ((s = n[T.POD_DURATION]) && (i[T.POD_DURATION] = s + ''))),
                  (s = this._s()) && (i[T.AD_TYPE] = s),
                  r.te.sendCustomEvent(r.he, t, i));
              }),
              (this.ze = function (t) {
                r.oe.setDroppedFramesCount(t);
              }),
              (this.Ps = function (t) {
                this.he === T.NO_SESSION_KEY && t !== T.NO_SESSION_KEY && (this.he = t);
              }),
              (this.ue = function () {
                return this.he;
              }),
              (this.Vt = function () {
                return r.te.getSessionId(this.he);
              }),
              (this.kt = function () {
                return r.te.getClientId(this.he);
              }),
              (this.Ft = function (t, n) {
                r.te.Ft(this.he, t, n);
              }),
              (N.prototype = Object.create(e.prototype)),
              (N.prototype.constructor = N);
          });
        (at.Impl = at.Impl || {}),
          (at.Impl.Html5Http = function () {
            (function () {}).apply(this, arguments),
              (this.makeRequest = function () {
                return this.makeRequestStandard.apply(this, arguments);
              }),
              (this.makeRequestStandard = function (t, n, i, e, s, o) {
                var r = new XMLHttpRequest();
                return (
                  r.open(t, n, !0),
                  e && r.overrideMimeType && (r.overrideMimeType = e),
                  e && r.setRequestHeader && r.setRequestHeader('Content-Type', e),
                  s > 0 &&
                    ((r.timeout = s),
                    (r.ontimeout = function () {
                      (r.ontimeout = r.onreadystatechange = null), o && o(!1, 'timeout after ' + s + ' ms');
                    })),
                  (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ((r.ontimeout = r.onreadystatechange = null),
                      200 === r.status ? o && o(!0, r.responseText) : o && o(!1, 'http status ' + r.status));
                  }),
                  r.send(i),
                  null
                );
              }),
              (this.release = function () {});
          }),
          (at.Impl = at.Impl || {}),
          (at.Impl.Html5Logging = function () {
            (function () {}).apply(this, arguments),
              (this.consoleLog = function (t, n) {
                'undefined' !== typeof console &&
                  ((console.log && n === w.LogLevel.DEBUG) || n === w.LogLevel.INFO
                    ? console.log(t)
                    : console.warn && n === w.LogLevel.WARNING
                    ? console.warn(t)
                    : console.error && n === w.LogLevel.ERROR && console.error(t));
              }),
              (this.release = function () {});
          }),
          (at.Impl = at.Impl || {}),
          (at.Impl.Html5Metadata = function () {
            (function () {}).apply(this, arguments),
              (this.getBrowserName = function () {
                return null;
              }),
              (this.getBrowserVersion = function () {
                return null;
              }),
              (this.getDeviceBrand = function () {
                return null;
              }),
              (this.getDeviceManufacturer = function () {
                return null;
              }),
              (this.getDeviceModel = function () {
                return null;
              }),
              (this.getDeviceType = function () {
                return null;
              }),
              (this.getDeviceVersion = function () {
                return null;
              }),
              (this.getFrameworkName = function () {
                return null;
              }),
              (this.getFrameworkVersion = function () {
                return null;
              }),
              (this.getOperatingSystemName = function () {
                return null;
              }),
              (this.getOperatingSystemVersion = function () {
                return null;
              }),
              (this.getDeviceCategory = function () {
                return null;
              }),
              (this.getScreenWidth = function () {
                return 'undefined' !== typeof window && window && window.screen && window.screen.width
                  ? window.screen.width.toString()
                  : null;
              }),
              (this.getScreenHeight = function () {
                return 'undefined' !== typeof window && window && window.screen && window.screen.height
                  ? window.screen.height.toString()
                  : null;
              }),
              (this.getScaleFactor = function () {
                return 'undefined' !== typeof window && window && window.devicePixelRatio
                  ? window.devicePixelRatio.toString()
                  : null;
              }),
              (this.release = function () {});
          }),
          (at.Impl = at.Impl || {}),
          (at.Impl.Html5Storage = function () {
            (function () {}).apply(this, arguments),
              (this.saveData = function (t, n, i, e) {
                var s = t + '.' + n;
                try {
                  localStorage.setItem(s, i), e(!0, null);
                } catch (t) {
                  e(!1, t.toString());
                }
              }),
              (this.loadData = function (t, n, i) {
                var e = t + '.' + n;
                try {
                  i(!0, localStorage.getItem(e));
                } catch (t) {
                  i(!1, t.toString());
                }
              }),
              (this.release = function () {});
          }),
          (at.Impl = at.Impl || {}),
          (at.Impl.Html5Time = function () {
            (function () {}).apply(this, arguments),
              (this.getEpochTimeMs = function () {
                return new Date().getTime();
              }),
              (this.release = function () {});
          }),
          (at.Impl = at.Impl || {}),
          (at.Impl.Html5Timer = function () {
            (function () {}).apply(this, arguments),
              (this.createTimer = function (t, n) {
                var i = setInterval(t, n);
                return function () {
                  -1 !== i && (clearInterval(i), (i = -1));
                };
              }),
              (this.release = function () {});
          });
        var n,
          s,
          O,
          _,
          A,
          C = (ht.VideoAnalytics = function () {
            var s = this;
            (s.Hi = null),
              (s.v = null),
              (s.Bi = null),
              (s.ki = null),
              (s.ji = null),
              (this.release = function () {
                s.c,
                  s.ki && s.ki.Ui() && s.ki.Fi(!1),
                  'undefined' !== typeof at.ProxyMonitor && s.ji && (at.ProxyMonitor.release(s.ji), (s.ji = null)),
                  s.ki && (s.ki.Yi(null), s.ki.Xi(), (s.ki = null)),
                  (s.Bi = null);
              }),
              function (t, n) {
                (s.Hi = t), (s.v = n), (s.Bi = n.buildTimer(T.version)), (s.ki = new N(s.Hi, s.Bi)), g.call(this);
              }.apply(this, arguments),
              (this.reportPlaybackRequested = function (t) {
                s.c, s.ki && (Z.It(t) > 0 && s.setContentInfo(t), s.ki.Ui() || s.ki.Fi(!0));
              }),
              (this.reportPlaybackEnded = function () {
                s.c,
                  s.ki &&
                    s.ki.Ui() &&
                    (s.ki.Fi(!1),
                    'undefined' !== typeof at.ProxyMonitor && s.ji && (at.ProxyMonitor.release(s.ji), (s.ji = null)),
                    s.ki.Yi(null));
              }),
              (this.reportPlaybackFailed = function (t, n) {
                s.ki &&
                  (Z.It(n) > 0 && s.setContentInfo(n),
                  s.ki.Ui() || s.ki.Fi(!0),
                  s.c,
                  s.reportPlaybackError(t, a.ErrorSeverity.FATAL),
                  s.reportPlaybackEnded());
              }),
              (this.setContentInfo = function (t) {
                Z.It(t) <= 0 || (s.ki && (s.c, s.ki.xi(t)));
              }),
              (this.setPlayerInfo = function (t) {
                Z.It(t) <= 0 || (s.ki && (s.c, s.ki.xi(t)));
              }),
              (this.reportPlaybackMetric = function () {
                0 !== arguments.length &&
                  (1 === arguments.length
                    ? s.qi(arguments[0])
                    : 2 === arguments.length
                    ? s.qi(arguments[0], arguments[1])
                    : 3 === arguments.length
                    ? s.qi(arguments[0], arguments[1], arguments[2])
                    : 4 === arguments.length && s.qi(arguments[0], arguments[1], arguments[2], arguments[3]));
              }),
              (this.reportPlaybackError = function (t, n) {
                s.ki && Z.wt(t) && (s.c, (n = new it(t, n)), s.ki.Hn(n));
              }),
              (this.reportPlaybackEvent = function (t, n) {
                if (Z.wt(t) && s.ki && (s.c, s.ki))
                  switch (t) {
                    case T.Events.USER_WAIT_STARTED:
                    case T.Events.BUMPER_VIDEO_STARTED:
                      s.ki.gt();
                      break;
                    case T.Events.USER_WAIT_ENDED:
                    case T.Events.BUMPER_VIDEO_ENDED:
                      s.ki.Ot();
                      break;
                    default:
                      s.ki.Ji(t, n);
                  }
              }),
              (this.setCallback = function (t) {
                s.c, s.ki && s.ki.Yi(t);
              }),
              (this.reportAdBreakStarted = function (t, n, i) {
                s.ki && (s.c, s.ki.Zi(t, n, i));
              }),
              (this.reportAdBreakEnded = function () {
                s.ki && (s.c, s.ki.zi());
              }),
              (this.setPlayer = function (t, n) {
                var i, e;
                void 0 !== t &&
                  (n && ((i = n[T.CONVIVA_MODULE]), (e = n[T.MEDIA_ELEMENT])),
                  'undefined' !== typeof i
                    ? (at.ProxyMonitor = i.ProxyMonitor)
                    : 'undefined' !== typeof ConvivaModule && (at.ProxyMonitor = ConvivaModule.ProxyMonitor),
                  'undefined' !== typeof at.ProxyMonitor &&
                    (s.c,
                    !t && s.ji
                      ? (at.ProxyMonitor.release(s.ji), (s.ji = null))
                      : t
                      ? (s.ji && at.ProxyMonitor.release(s.ji),
                        s.c,
                        (s.ji =
                          'undefined' !== typeof e
                            ? at.ProxyMonitor.initConvivaDropIn(t, e, s.v, this, at)
                            : at.ProxyMonitor.initConvivaDropIn(t, s.v, this, at)))
                      : t ||
                        'undefined' === typeof e ||
                        (s.ji = at.ProxyMonitor.initConvivaDropIn(t, e, s.v, this, at))));
              }),
              (this.setAdAnalytics = function (t) {
                t
                  ? s.getAdType() &&
                    (s.getAdType() === T.AdType.SERVER_SIDE
                      ? (s.Li = t.getAdPlayerMonitor())
                      : s.getAdType() === T.AdType.CLIENT_SIDE && s.c)
                  : (s.Li = null);
              }),
              (this.configureExistingSession = function (t) {
                t !== T.NO_SESSION_KEY && s.ki && (s.c, s.ki.Ps(t));
              }),
              (this.getSessionId = function () {
                return s.ki ? (s.c, s.ki.Vt()) : T.NO_SESSION_KEY;
              }),
              (this.getClientId = function () {
                return s.ki ? (s.c, s.ki.kt()) : null;
              }),
              (this.Wi = function () {
                return s.c, this.ki;
              }),
              (this.getAdType = function () {
                return s.ki ? s.ki.Qi : null;
              }),
              (this.$i = function () {
                return s.ki ? s.ki.Gi : null;
              }),
              (C.prototype = Object.create(g.prototype)),
              (C.prototype.constructor = C);
          });
        function I(t) {
          throw { name: 'SyntaxError', message: t, at: n, text: O };
        }
        function y(t) {
          return t && t !== s && I("Expected '" + t + "' instead of '" + s + "'"), (s = O.charAt(n)), (n += 1), s;
        }
        function t() {
          var t,
            n = '';
          for ('-' === s && y((n = '-')); s >= '0' && s <= '9'; ) (n += s), y();
          if ('.' === s) for (n += '.'; y() && s >= '0' && s <= '9'; ) n += s;
          if ('e' === s || 'E' === s)
            for (n += s, y(), ('-' !== s && '+' !== s) || ((n += s), y()); s >= '0' && s <= '9'; ) (n += s), y();
          if (((t = +n), !isNaN(t))) return t;
          I('Bad number');
        }
        function m() {
          var t,
            n,
            i,
            e = '';
          if ('"' === s)
            for (; y(); ) {
              if ('"' === s) return y(), e;
              if ('\\' === s)
                if ((y(), 'u' === s)) {
                  for (n = i = 0; n < 4 && ((t = parseInt(y(), 16)), isFinite(t)); n += 1) i = 16 * i + t;
                  e += String.fromCharCode(i);
                } else {
                  if ('string' !== typeof _[s]) break;
                  e += _[s];
                }
              else e += s;
            }
          I('Bad string');
        }
        function D() {
          for (; s && s <= ' '; ) y();
        }
        ht.JsonParse =
          ((_ = { '"': '"', '\\': '\\', '/': '/', b: '\b', f: '\f', n: '\n', r: '\r', t: '\t' }),
          (A = function () {
            switch ((D(), s)) {
              case '{':
                return (function () {
                  var t,
                    n = {};
                  if ('{' === s) {
                    if ((y('{'), D(), '}' === s)) return y('}'), n;
                    for (; s; ) {
                      if (
                        ((t = m()),
                        D(),
                        y(':'),
                        Object.hasOwnProperty.call(n, t) && I('Duplicate key "' + t + '"'),
                        (n[t] = A()),
                        D(),
                        '}' === s)
                      )
                        return y('}'), n;
                      y(','), D();
                    }
                  }
                  I('Bad object');
                })();
              case '[':
                return (function () {
                  var t = [];
                  if ('[' === s) {
                    if ((y('['), D(), ']' === s)) return y(']'), t;
                    for (; s; ) {
                      if ((t.push(A()), D(), ']' === s)) return y(']'), t;
                      y(','), D();
                    }
                  }
                  I('Bad array');
                })();
              case '"':
                return m();
              case '-':
                return t();
              default:
                return (
                  s >= '0' && s <= '9'
                    ? t
                    : function () {
                        switch (s) {
                          case 't':
                            return y('t'), y('r'), y('u'), y('e'), !0;
                          case 'f':
                            return y('f'), y('a'), y('l'), y('s'), y('e'), !1;
                          case 'n':
                            return y('n'), y('u'), y('l'), y('l'), null;
                        }
                        I("Unexpected '" + s + "'");
                      }
                )();
            }
          }),
          function (t, r) {
            return (
              (O = t),
              (n = 0),
              (s = ' '),
              (t = A()),
              D(),
              s && I('Syntax error'),
              'function' === typeof r
                ? (function t(n, i) {
                    var e,
                      s,
                      o = n[i];
                    if (o && 'object' === typeof o)
                      for (e in o)
                        Object.hasOwnProperty.call(o, e) && (void 0 !== (s = t(o, e)) ? (o[e] = s) : delete o[e]);
                    return r.call(n, i, o);
                  })({ '': t }, '')
                : t
            );
          });
        var b,
          P,
          M,
          L,
          U,
          V = (ht.JSON2 = {});
        function k(t) {
          return t < 10 ? '0' + t : t;
        }
        function F(t) {
          return (
            (b.lastIndex = 0),
            b.test(t)
              ? '"' +
                t.replace(b, function (t) {
                  var n = L[t];
                  return 'string' === typeof n ? n : '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + t + '"'
          );
        }
        'function' !== typeof Date.prototype.toJSON &&
          ((Date.prototype.toJSON = function () {
            return isFinite(this.valueOf())
              ? this.getUTCFullYear() +
                  '-' +
                  k(this.getUTCMonth() + 1) +
                  '-' +
                  k(this.getUTCDate()) +
                  'T' +
                  k(this.getUTCHours()) +
                  ':' +
                  k(this.getUTCMinutes()) +
                  ':' +
                  k(this.getUTCSeconds()) +
                  'Z'
              : null;
          }),
          (String.prototype.toJSON =
            Number.prototype.toJSON =
            Boolean.prototype.toJSON =
              function () {
                return this.valueOf();
              })),
          'function' !== typeof V.stringify &&
            ((b =
              /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
            (L = { '\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\' }),
            (V.stringify = function (t, n, i) {
              var e;
              if (((M = P = ''), 'number' === typeof i)) for (e = 0; e < i; e += 1) M += ' ';
              else 'string' === typeof i && (M = i);
              if ((U = n) && 'function' !== typeof n && ('object' !== typeof n || 'number' !== typeof n.length))
                throw new Error('JSON2.stringify');
              return (function t(n, i) {
                var e,
                  s,
                  o,
                  r,
                  u,
                  h = P,
                  a = i[n];
                switch (
                  (a && 'object' === typeof a && 'function' === typeof a.toJSON && (a = a.toJSON(n)),
                  'function' === typeof U && (a = U.call(i, n, a)),
                  typeof a)
                ) {
                  case 'string':
                    return F(a);
                  case 'number':
                    return isFinite(a) ? String(a) : 'null';
                  case 'boolean':
                  case 'null':
                    return String(a);
                  case 'object':
                    if (!a) return 'null';
                    if (
                      ((P += M), (u = []), Object.prototype.toString.apply(a) === Object.prototype.toString.apply([]))
                    ) {
                      for (r = a.length, e = 0; e < r; e += 1) u[e] = t(e, a) || 'null';
                      return (
                        (o =
                          0 === u.length
                            ? '[]'
                            : P
                            ? '[\n' + P + u.join(',\n' + P) + '\n' + h + ']'
                            : '[' + u.join(',') + ']'),
                        (P = h),
                        o
                      );
                    }
                    if (U && 'object' === typeof U)
                      for (r = U.length, e = 0; e < r; e += 1)
                        'string' === typeof U[e] && (o = t((s = U[e]), a)) && u.push(F(s) + (P ? ': ' : ':') + o);
                    else
                      for (s in a)
                        Object.prototype.hasOwnProperty.call(a, s) &&
                          (o = t(s, a)) &&
                          u.push(F(s) + (P ? ': ' : ':') + o);
                    return (
                      (o =
                        0 === u.length
                          ? '{}'
                          : P
                          ? '{\n' + P + u.join(',\n' + P) + '\n' + h + '}'
                          : '{' + u.join(',') + '}'),
                      (P = h),
                      o
                    );
                }
              })('', { '': t });
            }));
        var H = (ht.Ms = {});
        (H.Ls = '0123456789abcdef'),
          (H.Us = function (t) {
            for (var n = '', i = 7; i >= 0; i--) n += H.Ls.charAt((t >> (4 * i)) & 15);
            return n;
          }),
          (H.Vs = function (t) {
            for (var n = 1 + ((t.length + 8) >> 6), i = new Array(16 * n), e = 0; e < 16 * n; e++) i[e] = 0;
            for (e = 0; e < t.length; e++) i[e >> 2] |= t.charCodeAt(e) << (24 - (e % 4) * 8);
            return (i[e >> 2] |= 128 << (24 - (e % 4) * 8)), (i[16 * n - 1] = 8 * t.length), i;
          }),
          (H.ks = function (t, n) {
            var i = (65535 & t) + (65535 & n);
            return (((t >> 16) + (n >> 16) + (i >> 16)) << 16) | (65535 & i);
          }),
          (H.Fs = function (t, n) {
            return (t << n) | (t >>> (32 - n));
          }),
          (H.Hs = function (t, n, i, e) {
            return t < 20 ? (n & i) | (~n & e) : !(t < 40) && t < 60 ? (n & i) | (n & e) | (i & e) : n ^ i ^ e;
          }),
          (H.Bs = function (t) {
            return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
          }),
          (H.Gs = function (t) {
            for (var n = '', i = 0; i < t.length; i++) n += String.fromCharCode(t[i]);
            return H.js(n);
          }),
          (H.js = function (t) {
            if ('' === t) return '';
            for (
              var n,
                i = H.Vs(t),
                e = new Array(80),
                s = 1732584193,
                o = -271733879,
                r = -1732584194,
                u = 271733878,
                h = -1009589776,
                a = 0;
              a < i.length;
              a += 16
            ) {
              for (var f = s, c = o, l = r, v = u, d = h, E = 0; E < 80; E++)
                (e[E] = E < 16 ? i[a + E] : H.Fs(e[E - 3] ^ e[E - 8] ^ e[E - 14] ^ e[E - 16], 1)),
                  (n = H.ks(H.ks(H.Fs(s, 5), H.Hs(E, o, r, u)), H.ks(H.ks(h, e[E]), H.Bs(E)))),
                  (h = u),
                  (u = r),
                  (r = H.Fs(o, 30)),
                  (o = s),
                  (s = n);
              (s = H.ks(s, f)), (o = H.ks(o, c)), (r = H.ks(r, l)), (u = H.ks(u, v)), (h = H.ks(h, d));
            }
            return H.Us(s) + H.Us(o) + H.Us(r) + H.Us(u) + H.Us(h);
          });
        var B = (ht.CwsProtocol = function () {
          (this.Ks = function (t, n, i, e) {
            return (e.seq = t), (e.st = n), (e.t = i), e;
          }),
            (this.Ws = function (t, n) {
              var i = B.xs;
              return this.Ks(t, n, i, {});
            });
        });
        (B.version = '2.6'),
          (B.qs = '/0/wsg'),
          (B.P = '0'),
          (B.Ys = -1),
          (B.Js = !1),
          (B.Xs = 2),
          (B.Qs = -1),
          (B.Zs = -1),
          (B.zs = 1e3),
          (B.$s = 'sdk.js.1'),
          (B.no = 'CwsStateChangeEvent'),
          (B.io = 'CwsErrorEvent'),
          (B.xs = 'CwsSessionEndEvent'),
          (B.eo = 'CwsCustomEvent'),
          (B.so = 'CwsSeekEvent'),
          (B.oo = 'CwsDataSamplesEvent'),
          (B.ro = 'ok'),
          (B.uo = 'err'),
          (B.ho = 'clid'),
          (B.ao = 'cfg'),
          (B.fo = 'evs'),
          (B.co = 'maxhbinfos'),
          (B.lo = 'slg'),
          (B.vo = 'hbi'),
          (B.do = 'gw'),
          (B.Eo = 'fp'),
          (B.po = 'csi_en'),
          (B.Ro = 'CwsSessionHb'),
          (B.wo = 't'),
          (B.To = 'st'),
          (B.So = 'sst'),
          (B.go = 'lv'),
          (B.No = 'seq'),
          (B.Oo = 'cid'),
          (B._o = 'clid'),
          (B.Ao = 'clv'),
          (B.Co = 'pver'),
          (B.Io = 'iid'),
          (B.yo = 'sid'),
          (B.mo = 'vid'),
          (B.Do = 'an'),
          (B.bo = 'pn'),
          (B.Po = 'tags'),
          (B.Mo = 'sf'),
          (B.Lo = 'evs'),
          (B.Uo = 'lg'),
          (B.Vo = 'hbinfos'),
          (B.ko = 'sdk'),
          (B.Fo = 'pj'),
          (B.Ho = 'ps'),
          (B.Bo = 'br'),
          (B.Go = 'cl'),
          (B.jo = 'efps'),
          (B.Ko = 'afps'),
          (B.Wo = 'rfpstot'),
          (B.xo = 'rfpscnt'),
          (B.qo = 'rs'),
          (B.Yo = 'pht'),
          (B.Jo = 'bl'),
          (B.Xo = 'url'),
          (B.Qo = 'caps'),
          (B.Zo = 'pm'),
          (B.zo = 'w'),
          (B.$o = 'h'),
          (B.tr = 'ct'),
          (B.nr = 'le'),
          (B.ir = 'dftot'),
          (B.er = 'dfcnt'),
          (B.sr = 'ss'),
          (B.or = 'csi_n'),
          (B.rr = 'csi_t'),
          (B.ur = 'csi_l'),
          (B.hr = 'csi_v'),
          (B.ar = 'csi_c'),
          (B.fr = 'sch'),
          (B.cr = 'br'),
          (B.lr = 'brv'),
          (B.vr = 'dvb'),
          (B.dr = 'dvma'),
          (B.Er = 'dvm'),
          (B.pr = 'dvt'),
          (B.Rr = 'dvv'),
          (B.wr = 'sw'),
          (B.Tr = 'sh'),
          (B.Sr = 'scf'),
          (B.gr = 'fw'),
          (B.Nr = 'fwv'),
          (B.Or = 'cc'),
          (B._r = 'mn'),
          (B.Ar = 'mv'),
          (B.Cr = 'os'),
          (B.Ir = 'osv'),
          (B.yr = 'cat'),
          (B.mr = 'caps'),
          (B.Dr = 't'),
          (B.br = 'seq'),
          (B.Pr = 'st'),
          (B.Mr = 'act'),
          (B.Lr = 'skto'),
          (B.Ur = 'err'),
          (B.Vr = 'ft'),
          (B.kr = 'new'),
          (B.Fr = 'old'),
          (B.Hr = 'name'),
          (B.Br = 'attr'),
          (B.Gr = 'seq'),
          (B.jr = 'err'),
          (B.Kr = 'rtt'),
          (B.Wr = 'ad'),
          (B.xr = 'csi'),
          (B.qr = function (t) {
            switch (t) {
              case u.PlayerState.STOPPED:
                return B.Yr;
              case u.PlayerState.PLAYING:
                return B.Jr;
              case u.PlayerState.BUFFERING:
                return B.Xr;
              case u.PlayerState.PAUSED:
                return B.Qr;
              case u.PlayerState.NOT_MONITORED:
                return B.Zr;
              default:
                return B.zr;
            }
          }),
          (B.Yr = 1),
          (B.Jr = 3),
          (B.Xr = 6),
          (B.Qr = 12),
          (B.Zr = 98),
          (B.zr = 100),
          (B.$r = { tu: 0, ft: 1, nu: 2, iu: 4 }),
          (B.eu = { su: 0 });
        var G = (ht.LibJSONInterface = function () {
            (this.ou = function (t) {
              var n = null;
              try {
                n = V.stringify(t);
              } catch (t) {
                return n;
              }
              return n;
            }),
              (this.ru = function (t) {
                var n = null;
                try {
                  n = ht.JsonParse(t);
                } catch (t) {
                  return n;
                }
                return Z.uu(n) || (n = null), n;
              });
          }),
          j = (ht.CwsHeartbeat = function () {
            (this.hu = {}),
              function () {}.apply(this, arguments),
              (this.get = function () {
                return this.hu;
              }),
              (this.au = function (t, n) {
                this.hu[t] = n;
              }),
              (this.fu = function (t, n, i) {
                this.hu[t] || (this.hu[t] = {}), (this.hu[t][n] = i);
              }),
              (this.cu = function (t) {
                this.au(B.wo, t);
              }),
              (this.lu = function (t) {
                this.au(B.To, t);
              }),
              (this.vu = function (t) {
                this.au(B.So, t);
              }),
              (this.du = function (t) {
                this.au(B.go, t);
              }),
              (this.Eu = function (t) {
                this.au(B.No, t);
              }),
              (this.pu = function (t) {
                this.au(B.Oo, t);
              }),
              (this.Ru = function (t) {
                this.au(B._o, t);
              }),
              (this.wu = function (t) {
                this.au(B.Ao, t);
              }),
              (this.Tu = function (t) {
                this.au(B.Co, t);
              }),
              (this.Su = function (t) {
                this.au(B.mr, t);
              }),
              (this.gu = function (t) {
                this.au(B.yo, t);
              }),
              (this.Nu = function (t) {
                this.au(B.Io, t);
              }),
              (this.Ou = function (t) {
                this.au(B.mo, t);
              }),
              (this._u = function (t) {
                this.au(B.Do, t);
              }),
              (this.Au = function (t) {
                this.au(B.bo, t);
              }),
              (this.Cu = function (t) {
                this.au(B.Po, t);
              }),
              (this.Iu = function (t) {
                this.au(B.Mo, t);
              }),
              (this.yu = function (t) {
                this.au(B.Qo, t);
              }),
              (this.mu = function (t) {
                this.au(B.Lo, t);
              }),
              (this.Du = function (t) {
                this.au(B.ko, t);
              }),
              (this.bu = function (t) {
                this.au(B.Uo, t);
              }),
              (this.Pu = function (t) {
                this.au(B.Vo, t);
              }),
              (this.we = function (t) {
                this.au(B.Ho, t);
              }),
              (this.Mu = function (t) {
                this.au(B.Fo, t);
              }),
              (this.Lu = function (t) {
                this.au(B.Go, t);
              }),
              (this.Uu = function (t) {
                this.au(B.Bo, t);
              }),
              (this.Vu = function (t) {
                this.au(B.qo, t);
              }),
              (this.ku = function (t) {
                this.au(B.jo, t);
              }),
              (this.Fu = function (t) {
                this.au(B.Ko, t);
              }),
              (this.Hu = function (t) {
                this.au(B.xo, t);
              }),
              (this.Bu = function (t) {
                this.au(B.Wo, t);
              }),
              (this.Gu = function (t) {
                this.fu(B.Zo, B.fr, t);
              }),
              (this.ju = function (t) {
                this.fu(B.Zo, B.cr, t);
              }),
              (this.Ku = function (t) {
                this.fu(B.Zo, B.lr, t);
              }),
              (this.Wu = function (t) {
                this.fu(B.Zo, B.vr, t);
              }),
              (this.xu = function (t) {
                this.fu(B.Zo, B.dr, t);
              }),
              (this.qu = function (t) {
                this.fu(B.Zo, B.Er, t);
              }),
              (this.Yu = function (t) {
                this.fu(B.Zo, B.pr, t);
              }),
              (this.Ju = function (t) {
                this.fu(B.Zo, B.Rr, t);
              }),
              (this.Xu = function (t) {
                this.fu(B.Zo, B.gr, t), this.au(B.gr, t);
              }),
              (this.Qu = function (t) {
                this.fu(B.Zo, B.Nr, t), this.au(B.Nr, t);
              }),
              (this.Zu = function (t) {
                this.fu(B.Zo, B.Cr, t.toUpperCase());
              }),
              (this.zu = function (t) {
                this.fu(B.Zo, B.Ir, t);
              }),
              (this.$u = function (t) {
                this.fu(B.Zo, B.yr, t);
              }),
              (this.th = function (t) {
                this.fu(B.Zo, B.wr, t);
              }),
              (this.nh = function (t) {
                this.fu(B.Zo, B.Tr, t);
              }),
              (this.ih = function (t) {
                this.fu(B.Zo, B.Sr, t);
              }),
              (this.eh = function (t) {
                this.au(B.ir, t);
              }),
              (this.ze = function (t) {
                this.au(B.er, t);
              }),
              (this.sh = function (t) {
                this.au(B.Yo, t);
              }),
              (this.oh = function (t) {
                this.au(B.Jo, t);
              }),
              (this.rh = function (t) {
                this.au(B.Xo, t);
              }),
              (this.uh = function (t) {
                this.au(B.zo, t);
              }),
              (this.hh = function (t) {
                this.au(B.$o, t);
              }),
              (this.ah = function (t) {
                this.au(B.tr, t);
              }),
              (this.fh = function (t) {
                this.au(B.nr, t);
              }),
              (this.ch = function () {
                this.au(B.Wr, !0);
              }),
              (this.lh = function (t) {
                this.au(B.sr, t);
              }),
              (this.setModuleName = function (t) {
                this.fu(B.Or, B._r, t);
              }),
              (this.vh = function (t) {
                this.fu(B.Or, B.Ar, t);
              }),
              (this.dh = function (t) {
                this.au(B.xr, t);
              }),
              (this.Eh = function (t) {
                t && this.au(B.or, t);
              }),
              (this.ph = function (t) {
                t && this.au(B.rr, t);
              }),
              (this.Rh = function (t) {
                t && this.au(B.ur, t);
              }),
              (this.wh = function (t) {
                t && this.au(B.hr, t);
              }),
              (this.Th = function (t) {
                t && this.au(B.ar, t);
              });
          }),
          K = (ht.CwsSession = function () {
            var p = this;
            (p.Sh = null),
              (p.Et = null),
              (p.gh = 0),
              (p.Nh = 0),
              (p.Oh = B.$r.tu),
              (p._h = B.eu.su),
              (p.Ah = []),
              (p.Ch = -1),
              (p.ln = -2),
              (p.Xn = -1),
              (p.Ih = -1),
              (p.yh = null),
              (p.vn = u.PlayerState.UNKNOWN),
              (p.fn = -1),
              (p.mh = -1),
              (p.rn = null),
              (p.Sn = -1),
              (p.gn = -1),
              (p.oe = null),
              (p.nn = null),
              (p.sn = null),
              (p.Dh = null),
              (p.bh = null),
              (p.Ph = {}),
              (p.Mh = null),
              (p.Lh = null),
              (p.Uh = null),
              (p.Vh = null),
              (p.kh = null),
              (p.Fh = null),
              (p.Hh = null),
              (p.Bh = null),
              (p.Gh = null),
              (p.jh = null),
              (p.Kh = null),
              (p.Wh = null),
              (p.xh = null),
              (p.qh = null),
              (p.Yh = null),
              (p.wn = null),
              (p.Tn = null),
              (p.A = null),
              (p.C = null),
              (p.Ue = null),
              (p.Jh = null),
              (p.Xh = !1),
              (p.Qh = !1),
              (p.Zh = !1),
              (p.zh = !1),
              (p.$h = null),
              (p.ta = 1e3),
              (p.na = 0),
              (p.ia = 0),
              (p.ea = {}),
              (p.N = {}),
              (p.sa = !1),
              (p.oa = null),
              (p.ra = null),
              (p.ua = null),
              (p.ha = null),
              (p.aa = null),
              (p.fa = null),
              (p.ca = 12e4),
              (p.la = B.Js),
              (p.va = !1),
              (p.da = null),
              (p.hi = null),
              function (t, n, i, e, s, o, r, u, h, a, f, c, l) {
                (this.Ea = t),
                  (this.Hi = n),
                  (this.ui = i),
                  (this.c = e),
                  this.c.setModuleName('CwsSession'),
                  (this.w = s),
                  (this.Bi = o),
                  (this.pa = r),
                  (this.Ra = u),
                  (this.wa = h),
                  (this.ai = a),
                  (this.Ta = f),
                  (this.Et = c),
                  this.Et && ((p.fn = this.Et.encodedFrameRate), (p.rn = this.Et.streamUrl), (p.mh = this.Et.duration)),
                  this.Ta && (p.da = p.Ta.get(Y.D)),
                  (p.hi = l);
              }.apply(this, arguments),
              (this.ut = function () {
                (this.Ta = null),
                  (this.ai = null),
                  (this.R = null),
                  (this.wa = null),
                  (this.Ra = null),
                  (this.pa = null),
                  (this.Bi = null),
                  (this.w = null),
                  (this.c = null),
                  (this.ui = null),
                  (this.Hi = null),
                  this.Ea.Sa(),
                  (this.Ea = null),
                  (this.Jh = null),
                  (this.Zh = !0);
              }),
              (this.ga = function (t) {
                (this.Na = t),
                  (this.Oa = this.Na.Oa),
                  this.c.gu(this.Na.S),
                  (this.gh = this.wa.current()),
                  this._a() || this.Aa()
                    ? ((this.Oh += K.Ca), p.c.info('start(): assetName=' + p.Et.assetName))
                    : p.c.info('start()' + p.Ia());
              }),
              (this.ya = function () {
                this.zh = !0;
              }),
              (this.ma = function () {
                this.c.debug('initialize()'),
                  (this._a() || this.Aa() || this.Da()) && (p.ba(), p.Pa(), p.Ma(), (this._a() || this.Aa()) && p.La());
              }),
              (this.Ua = function () {
                this.c.debug('end(): schedule the last hb before session cleanup' + p.Ia()),
                  this.Va(),
                  this.ka(),
                  this.Fa(),
                  this.Ha();
              }),
              (this.Ba = function () {
                this.zh || (this.Ha(), this.Ga());
              }),
              (this.ju = function (t) {
                var n = p.Mh;
                n !== t && t && (p.c.debug('Change browserName from ' + n + ' to ' + t), (p.Mh = t));
              }),
              (this.Ku = function (t) {
                var n = p.Lh;
                n !== t && t && (p.c.debug('Change browserVersion from ' + n + ' to ' + t), (p.Lh = t));
              }),
              (this.Wu = function (t) {
                var n = p.Uh;
                n !== t && t && (p.c.debug('Change deviceBrand from ' + n + ' to ' + t), (p.Uh = t));
              }),
              (this.xu = function (t) {
                var n = p.Vh;
                n !== t && t && (p.c.debug('Change deviceManufacturer from ' + n + ' to ' + t), (p.Vh = t));
              }),
              (this.qu = function (t) {
                var n = p.kh;
                n !== t && t && (p.c.debug('Change deviceModel from ' + n + ' to ' + t), (p.kh = t));
              }),
              (this.Yu = function (t) {
                var n = p.Fh;
                n !== t && t && (p.c.debug('Change deviceType from ' + n + ' to ' + t), (p.Fh = t));
              }),
              (this.Ju = function (t) {
                var n = p.Hh;
                n !== t && t && (p.c.debug('Change deviceVersion from ' + n + ' to ' + t), (p.Hh = t));
              }),
              (this.Zu = function (t) {
                var n = p.jh;
                n !== t && t && (p.c.debug('Change operatingSystemName from ' + n + ' to ' + t), (p.jh = t));
              }),
              (this.zu = function (t) {
                var n = p.Kh;
                n !== t && t && (p.c.debug('Change operatingSystemVersion from ' + n + ' to ' + t), (p.Kh = t));
              }),
              (this.$u = function (t) {
                var n = p.Wh;
                n !== t && t && (p.c.debug('Change deviceCategory from ' + n + ' to ' + t), (p.Wh = t));
              }),
              (this.th = function (t) {
                var n = p.xh;
                n !== t && t && (p.c.debug('Change screenWidth from ' + n + ' to ' + t), (p.xh = t));
              }),
              (this.nh = function (t) {
                var n = p.qh;
                n !== t && t && (p.c.debug('Change screenHeight from ' + n + ' to ' + t), (p.qh = t));
              }),
              (this.ih = function (t) {
                var n = p.Wh;
                n !== t && t && (p.c.debug('Change scaleFactor from ' + n + ' to ' + t), (p.Yh = t));
              }),
              (this.ja = function () {
                return p.Bh;
              }),
              (this.Xu = function (t) {
                var n = p.Bh;
                n !== t && t && (p.c.debug('Change frameworkName from ' + n + ' to ' + t), (p.Bh = t));
              }),
              (this.Ka = function () {
                return p.Gh;
              }),
              (this.Qu = function (t) {
                var n = p.Gh;
                n !== t && t && (p.c.debug('Change frameworkVersion from ' + n + ' to ' + t), (p.Gh = t));
              }),
              (this.rh = function (t) {
                var n;
                p.Et.streamUrl ||
                  ((n = p.rn) !== t && t && (p.c.debug('Change stream url from ' + n + ' to ' + t), (p.rn = t)));
              }),
              (this.Wa = function () {
                p.ka(),
                  p.va ||
                    (p.xa(),
                    (p.fa = p.Bi.create(p.xa, p.ca, 'CwsSession.startCdnTimer')),
                    p.c.debug('fetching cdn ip timer started'));
              }),
              (this.ka = function () {
                p.fa && (p.fa(), p.qa(null, null, null, null, null), (p.fa = null));
              }),
              (this.xa = function () {
                p.c.debug('detectCDNServerIp(): For ' + p.rn), p.la ? p.Ya() : p.ka();
              }),
              (this.Ya = function () {
                try {
                  var t;
                  'function' === typeof XMLHttpRequest || 'object' === typeof XMLHttpRequest
                    ? ((t = new XMLHttpRequest()).open('HEAD', p.rn, !0),
                      t.setRequestHeader('Pragma', 'akamai-x-cache-on'),
                      (t.onreadystatechange = function () {
                        4 === this.readyState &&
                          (200 === this.status &&
                          (this.getAllResponseHeaders().indexOf('x-cache') >= 0 ||
                            this.getAllResponseHeaders().indexOf('X-Cache') >= 0)
                            ? p.qa(
                                'Akamai',
                                'header',
                                'X-Cache',
                                '' + this.getResponseHeader('X-Cache'),
                                '' + this.status,
                              )
                            : p.qa('null', 'header', 'null', 'null', '' + this.status));
                      }),
                      t.send())
                    : p.c.info('xmlhttpreq is not available here to fetch CDN Server Ip');
                } catch (t) {
                  p.c.info('Exception caught in makeAkamaiHeadRequest');
                }
              }),
              (this.qa = function (t, n, i, e, s) {
                var o = {},
                  r = {};
                p.oa !== t &&
                  (null !== p.oa && (r[B.or] = p.oa),
                  (p.oa = t),
                  null === p.oa ? (o[B.or] = 'null') : (o[B.or] = p.oa)),
                  p.ra !== n &&
                    (null !== p.ra && (r[B.rr] = p.ra),
                    (p.ra = n),
                    null === p.ra ? (o[B.rr] = 'null') : (o[B.rr] = p.ra)),
                  p.ua !== i &&
                    (null !== p.ua && (r[B.ur] = p.ua),
                    (p.ua = i),
                    null === p.ua ? (o[B.ur] = 'null') : (o[B.ur] = p.ua)),
                  p.ha !== e &&
                    (null !== p.ha && (r[B.hr] = p.ha),
                    (p.ha = e),
                    null === p.ha ? (o[B.hr] = 'null') : (o[B.hr] = p.ha)),
                  p.aa !== s &&
                    (null !== p.aa && (r[B.ar] = p.aa),
                    (p.aa = s),
                    null === p.aa ? (o[B.ar] = 'null') : (o[B.ar] = p.aa)),
                  '{}' !== JSON.stringify(o) && p.Ja(o, r);
              }),
              (this.Xa = function (t) {
                var n = p.ln;
                n !== t && t > 0 && (p.c.info('Change bitrate from ' + n + ' to ' + t), p.Qa(n, t), (p.ln = t));
              }),
              (this.eh = function (t) {
                var n = p.Xn;
                n !== t &&
                  t >= 0 &&
                  (p.c.info('Change dropped frames total from ' + n + ' to ' + t), p.Za(n, t), (p.Xn = t));
              }),
              (this.ze = function (t) {
                var n = p.Ih,
                  i = t + (-1 === p.Ih ? 0 : p.Ih);
                n !== t &&
                  i >= 0 &&
                  (p.c.info('Change dropped frames count from ' + n + ' to ' + i), p.za(n, i), (p.Ih = i));
              }),
              (this.Vu = function (t) {
                var n = p.yh;
                n !== t && t && (p.c.info('Change resource from ' + n + ' to ' + t), (p.yh = t));
              }),
              (this._u = function (t) {
                p.nn !== t && t && (p.c.info('Change assetName from ' + p.nn + ' to ' + t), (p.nn = t));
              }),
              (this.du = function (t) {
                var n = p.bh;
                n !== t && Z.Ii(t) && (p.c.info('Change isLive from ' + n + ' to ' + t), (p.bh = t));
              }),
              (this.Ou = function (t) {
                var n = p.sn;
                n !== t && t && (p.c.info('Change viewerId from ' + n + ' to ' + t), (p.sn = t));
              }),
              (this.Au = function (t) {
                var n = p.Dh;
                n !== t && t && (p.c.info('Change playerName from ' + n + ' to ' + t), (p.Dh = t));
              }),
              (this.Cu = function (t) {
                var n = p.Ph;
                !Z.$a(n, t) && t && (p.c.info('Change tags from ' + Z.tf(n) + ' to ' + Z.tf(t)), (p.Ph = t));
              }),
              (this.ku = function (t) {
                p.Et.encodedFrameRate > 0 || (p.c.debug('setEncodedFrameRate(): ' + t), (p.fn = t));
              }),
              (this.Lu = function (t) {
                p.Et.duration > 0 || (p.c.debug('setContentLength(): ' + t), (p.mh = t));
              }),
              (this.we = function (t) {
                var n;
                p.Qh ||
                  t !== u.PlayerState.PLAYING ||
                  ((p.Qh = !0),
                  Z.wt(p.Et.viewerId) ||
                    p.c.error('Missing viewerId. viewerId should be updated before first frame is rendered.'),
                  (Z.wt(p.Et.streamType) && c.StreamType.UNKNOWN !== p.Et.streamType) ||
                    p.c.error(
                      'Missing streamType - Live or VOD. streamType should be updated before first frame is rendered.',
                    ),
                  Z.wt(p.Et.applicationName) ||
                    p.c.error(
                      'Missing applicationName. applicationName should be updated before first frame is rendered.',
                    )),
                  p.vn !== t &&
                    ((n = p.vn),
                    p.c.info('setPlayerState(): changing player state from ' + n + ' to ' + t),
                    p.nf(n, t),
                    (p.vn = t));
              }),
              (this.if = function (t) {
                var n = p.Sn;
                n !== t &&
                  t > 0 &&
                  (p.c.debug('Change stream resolution width from ' + n + ' to ' + t), p.ef(n, t), (p.Sn = t));
              }),
              (this.sf = function (t) {
                var n = p.gn;
                n !== t &&
                  t > 0 &&
                  (p.c.debug('Change stream resolution height from ' + n + ' to ' + t), p.rf(n, t), (p.gn = t));
              }),
              (this.ah = function (t) {
                var n = p.A;
                n !== t &&
                  t &&
                  (p.c.debug('Change network connection type from ' + n + ' to ' + t), p.uf(n, t), (p.A = t));
              }),
              (this.fh = function (t) {
                var n = p.C;
                n !== t &&
                  t &&
                  (p.c.debug('Change network link encryption from ' + n + ' to ' + t), p.hf(n, t), (p.C = t));
              }),
              (this.dh = function (t) {
                (p.va = !0), p.ka();
                var n = p.Ue;
                n !== t &&
                  Z.wt(t) &&
                  (p.c.debug('Change CDN Server IP from ' + n + ' to ' + t), p.af(n, t), (p.Ue = t));
              }),
              (this.ff = function (t) {
                var n;
                p.c.debug('togglePauseJoin()'),
                  p.Xh !== t
                    ? ((n = p.Xh), (t = !p.Xh), p.cf(n, t), (p.Xh = !p.Xh))
                    : p.c.debug('togglePauseJoin(): same value, ignoring');
              }),
              (this.lf = function (t, n) {
                p.vf(t, n);
              }),
              (this.df = function (t, n) {
                var i;
                (n[B.Dr] = t),
                  (n[B.Pr] = this.Ef()),
                  (n[B.br] = this.Ea.pf()),
                  this.oe &&
                    ((i = nt.Rf(this.oe.getPHT(), 0, null, -1)),
                    (t = nt.Rf(this.oe.getBufferLength(), 0, null, -1)),
                    i >= 0 && (n[B.Yo] = i),
                    t > 0 && (n[B.Jo] = t)),
                  this.Ea.wf(n);
              }),
              (this.Tf = function (t) {
                (p.oe = t), p.oe ? p.Sf() : p.gf();
              }),
              (this.Va = function () {
                var t = this.Ra.Ws(this.Nf(), this.Ef());
                this.Ea.wf(t);
              }),
              (this.vf = function (t, n) {
                var i = {};
                (i[B.Ur] = t), (i[B.Vr] = n), this.df(B.io, i);
              }),
              (this.Qa = function (t, n) {
                var i = {},
                  e = {};
                t > 0 && (e[B.Bo] = t), (i[B.Bo] = n), this.Ja(i, e);
              }),
              (this.Of = function (t, n) {
                var i = {};
                (i[B.Mr] = t), n >= 0 && (i[B.Lr] = n), this.df(B.so, i);
              }),
              (this.ef = function (t, n) {
                var i = {},
                  e = {};
                -1 !== t && (e[B.zo] = t), (i[B.zo] = n), this.Ja(i, e);
              }),
              (this.rf = function (t, n) {
                var i = {},
                  e = {};
                -1 !== t && (e[B.$o] = t), (i[B.$o] = n), this.Ja(i, e);
              }),
              (this.uf = function (t, n) {
                var i = {},
                  e = {};
                null !== t && (e[B.tr] = t), (i[B.tr] = n), this.Ja(i, e);
              }),
              (this.hf = function (t, n) {
                var i = {},
                  e = {};
                null !== t && (e[B.nr] = t), (i[B.nr] = n), this.Ja(i, e);
              }),
              (this.af = function (t, n) {
                var i = {},
                  e = {};
                Z.wt(t) && (e[B.xr] = t), (i[B.xr] = n), this.Ja(i, e);
              }),
              (this.Za = function (t, n) {
                var i = {},
                  e = {};
                t >= 0 && (e[B.ir] = t), (i[B.ir] = n), this.Ja(i, e);
              }),
              (this.za = function (t, n) {
                var i = {},
                  e = {};
                t >= 0 && (e[B.er] = t), (i[B.er] = n), this.Ja(i, e);
              }),
              (this.cf = function (t, n) {
                var i = {},
                  e = {};
                (e[B.Fo] = t), (i[B.Fo] = n), this.Ja(i, e);
              }),
              (this.nf = function (t, n) {
                var i = {},
                  e = {};
                (i[B.Ho] = B.qr(n)), (e[B.Ho] = B.qr(t)), this.Ja(i, e);
              }),
              (this.Ja = function (t, n) {
                var i = {};
                (i[B.kr] = t), n && Z.It(n) > 0 && (i[B.Fr] = n), this.df(B.no, i);
              }),
              (this._f = function (t, n) {
                var i = {};
                (i[B.Hr] = t), Z.It(n) > 0 && (i[B.Br] = n), this.df(B.eo, i);
              }),
              (this.Fa = function () {
                p.Sh && (p.Sh(), (p.Sh = null));
              }),
              (this.Ga = function () {
                p.Fa();
                var t = 1e3 * p.ui.heartbeatInterval;
                p.Sh = p.Bi.create(p.Ha, t, 'Session.sendHeartbeat:' + this.Oa);
              }),
              (this.gf = function () {
                p.$h && (p.$h(), (p.$h = null));
              }),
              (this.Sf = function () {
                p.gf(), (p.$h = p.Bi.create(p.Af, p.ta, 'Session.startRfpsTimer'));
              }),
              (this.Cf = function () {
                var t = { err: 'pending' };
                (t.seq = p.Nh - 1), (t.sentAt = p.Ef()), (t.rtt = -1), p.Ah.push(t);
                for (var n = 0; n < p.Ah.length; n++) 'ok' === (t = p.Ah[n]).err && (p.Ah.splice(n, 1), n--);
              }),
              (this.If = function (t, n) {
                for (var i = 0; i < p.Ah.length; i++) {
                  var e = p.Ah[i];
                  e.seq === t && ((e.rtt = p.Ef() - e.sentAt), (e.err = n));
                }
              }),
              (this.yf = function (t) {
                for (var n = 0; n < p.Ah.length; n++) {
                  var i = p.Ah[n];
                  i.seq === t && ((i.rtt = p.Ef() - i.sentAt), (i.err = 'ok'));
                }
              }),
              (this.mf = function () {
                for (var t, n, i = p.Ta.get(Y.Df), e = [], s = -1, o = 0; o < p.Ah.length; o++)
                  if ('ok' === (n = p.Ah[o]).err) {
                    s = n.seq;
                    break;
                  }
                for (var r = 0; r < p.Ah.length; r++) ((t = (n = p.Ah[r]).seq) < p.Nh - i || t < s) && e.push(r);
                for (var u = [], h = 0; h < p.Ah.length; h++)
                  (t = (n = p.Ah[h]).seq), e.indexOf(h) < 0 && u.push(p.Ah[h]);
                p.Ah = u;
              }),
              (this.bf = function () {
                p.mf();
                for (var t = [], n = 0; n < p.Ah.length; n++) {
                  var i = p.Ah[n],
                    e = {};
                  (e[B.Gr] = i.seq), (e[B.Kr] = i.rtt), (e[B.jr] = i.err), t.push(e);
                }
                return t;
              }),
              (this.Pf = function () {
                var t,
                  n = -1,
                  i = -1,
                  e = p.Ea.Sa();
                if (p.Da() && 0 === e.length) return null;
                var s = new j();
                s.cu(B.Ro), s.pu(p.ui.customerKey), s.Ru(p.Ta.get(Y.D)), s.gu(p.Na.S), s.Eu(p.Nh), s.Tu(B.version);
                var o = T.version;
                if (
                  (p.hi && (o = p.hi),
                  s.wu(o),
                  s.Nu(p.Hi.S),
                  s.Su(0),
                  p.Hi.A ? s.ah(p.Hi.A) : p.A && s.ah(p.A),
                  p.Hi.C ? s.fh(p.Hi.C) : p.C && s.fh(p.C),
                  Z.wt(p.Ue) && s.dh(p.Ue),
                  s.Gu(B.$s),
                  p.Mh && s.ju(p.Mh),
                  p.Lh && s.Ku(p.Lh),
                  p.Uh && s.Wu(p.Uh),
                  p.Vh && s.xu(p.Vh),
                  p.kh && s.qu(p.kh),
                  p.Fh && s.Yu(p.Fh),
                  p.Hh && s.Ju(p.Hh),
                  p.jh && s.Zu(p.jh),
                  p.Kh && s.zu(p.Kh),
                  p.Wh && s.$u(p.Wh),
                  p.Bh && s.Xu(p.Bh),
                  p.Gh && s.Qu(p.Gh),
                  p.xh && !isNaN(p.xh) && s.th(parseInt(p.xh, 10)),
                  p.qh && !isNaN(p.qh) && s.nh(parseInt(p.qh, 10)),
                  p.Yh && !isNaN(p.Yh)
                    ? s.ih(parseFloat(p.Yh))
                    : ((p.xh && !isNaN(p.xh)) || (p.qh && !isNaN(p.qh))) && s.ih(1),
                  p.oe &&
                    ((p.wn = p.oe.bn()),
                    p.wn && s.setModuleName(p.wn),
                    (p.Tn = p.oe.Pn()),
                    p.Tn && s.vh(p.Tn),
                    p.oe.Mn() && ((p.Bh = p.oe.Mn()), s.Xu(p.Bh)),
                    p.oe.Un() && ((p.Gh = p.oe.Un()), s.Qu(p.Gh))),
                  p.sn && s.Ou(p.sn),
                  Z.It(p.Ph) > 0 && s.Cu(p.Ph),
                  p._a() || p.Aa())
                ) {
                  p.Aa() && s.ch(), p.nn && s._u(p.nn), s.Iu(p.Oh);
                  o = B.qr(p.vn);
                  s.we(o),
                    s.Mu(p.Xh),
                    p.Dh && s.Au(p.Dh),
                    Z.Ii(p.bh) && s.du(p.bh),
                    p.mh > 0 && s.Lu(p.mh),
                    p.ln > 0 && s.Uu(p.ln),
                    null !== p.yh && s.Vu(p.yh),
                    p.fn > 0 && s.ku(p.fn),
                    p.oe && ((n = nt.Rf(p.oe.getPHT(), 0, null, -1)), (i = nt.Rf(p.oe.getBufferLength(), 0, null, -1))),
                    Z.lt(p.Hi.I) ? (t = p.Hi.I) : p.oe && (t = p.oe.getSignalStrength()),
                    n >= 0 && s.sh(n),
                    i > 0 && s.oh(i);
                  i = p.Mf();
                  if (
                    (i > 0 && s.Fu(i),
                    p.ia > 0 && s.Bu(nt.Rf(p.ia, 0, null, -1)),
                    p.na > 0 && s.Hu(nt.Rf(p.na, 0, null, -1)),
                    t !== u.DEFAULT_SIGNAL_STRENGTH && s.lh(t),
                    p.rn && s.rh(p.rn),
                    p.Sn > 0 && s.uh(p.Sn),
                    p.gn > 0 && s.hh(p.gn),
                    p.Xn > -1 && s.eh(p.Xn),
                    p.Ih > -1 && (s.ze(p.Ih), p.Ih > 0 && (p.za(p.Ih, 0), (p.Ih = 0))),
                    'undefined' !== typeof p.Jh)
                  )
                    for (var r in p.Jh) s.au(r, p.Jh[r]);
                } else s.Iu(B.$r.tu);
                return (
                  e.length > 0 && s.mu(e),
                  s.yu(p._h),
                  s.Du(!0),
                  p.Ta.get(Y.Lf) && s.bu(p.ai.Sa()),
                  p.Ta.get(Y.Df) > 0 && (e = p.bf()).length > 0 && s.Pu(e),
                  0 === p.Nh && (s = p.Uf(s)),
                  0 !== p.Nh && (s = p.Vf(s)),
                  s.vu(p.gh),
                  s.lu(p.Ef()),
                  p.la && (s.Eh(p.oa), s.ph(p.ra), s.Rh(p.ua), s.wh(p.ha), s.Th(p.aa)),
                  p.Nh++,
                  s.get()
                );
              }),
              (this.Vf = function (t) {
                var n,
                  i = p.N,
                  e = {};
                for (n in t.hu.tags) Object.prototype.hasOwnProperty.call(i, n) || (e[n] = t.hu.tags[n]);
                (t.hu.tags = e), (p.N = {});
                for (var s = 0; s < p.ea.length; s++)
                  Object.prototype.hasOwnProperty.call(p.Hi.N, p.ea[s])
                    ? Object.prototype.hasOwnProperty.call(p.Hi._, p.ea[s])
                      ? p.Hi._[p.ea[s]] === Y.Bt.Gt
                        ? ((p.N[Y.kf + '' + p.ea[s]] = Y.Bt.Gt),
                          p.Hi.O('End-user chose to opt-out of personal data collection'))
                        : p.Hi._[p.ea[s]] === Y.Bt.Kt
                        ? ((p.N[Y.kf + '' + p.ea[s]] = Y.Bt.Kt),
                          p.Hi.O('End-user chose to opt-out of personal data collection'))
                        : p.Hi._[p.ea[s]] === Y.Bt.Ht
                        ? ((p.N[Y.kf + '' + p.ea[s]] = Y.Bt.Ht),
                          p.Hi.O('End-user used privacy settings and chose to opt-out of personal data collection'))
                        : ((p.N[Y.kf + '' + p.ea[s]] = p.Hi.N[p.ea[s]]), p.Hi.O('Data collection successful'))
                      : ((p.N[Y.kf + '' + p.ea[s]] = p.Hi.N[p.ea[s]]), p.Hi.O('Data collection successful'))
                    : (p.N[Y.kf + '' + p.ea[s]] = Y.Bt.Ff);
                var o,
                  r = {};
                for (o in i) {
                  var u = o.split('.');
                  ('{}' !== JSON.stringify(p.ea) && -1 !== p.ea.indexOf('' + u[2])) ||
                    i[Y.kf + '' + u[2]] === Y.Bt.Hf ||
                    (p.Hi.O('Data collection restricted from Conviva back-end'),
                    (p.N[Y.kf + '' + u[2]] = Y.Bt.Hf),
                    (r[Y.kf + '' + u[2]] = Y.Bt.Hf));
                }
                if ('{}' !== JSON.stringify(p.N)) {
                  var h,
                    a = Z.Bf(p.N);
                  for (h in t.hu.tags) a[h] = t.hu.tags[h];
                  if (((t.hu.tags = a), !Z.$a(i, p.N))) {
                    var f = {};
                    if (('{}' !== JSON.stringify(r) && (f[B.Po] = r), '{}' !== JSON.stringify(i))) {
                      for (var c in i) p.N[c] && i[c] !== p.N[c] && (f[B.Po] || (f[B.Po] = {}), (f[B.Po][c] = p.N[c]));
                      for (var l in p.N)
                        (Object.prototype.hasOwnProperty.call(i, l) && i[l] === p.N[l]) ||
                          (f[B.Po] || (f[B.Po] = {}), (f[B.Po][l] = p.N[l]));
                    }
                    '{}' === JSON.stringify(i) && (f[B.Po] = p.N);
                    var v,
                      d,
                      E = {};
                    (E[B.kr] = f),
                      (E[B.Dr] = B.no),
                      (E[B.Pr] = p.Ef()),
                      (E[B.br] = p.Ea.pf()),
                      p.oe &&
                        ((v = nt.Rf(p.oe.getPHT(), 0, null, -1)),
                        (d = nt.Rf(p.oe.getBufferLength(), 0, null, -1)),
                        v >= 0 && (E[B.Yo] = v),
                        d > 0 && (E[B.Jo] = d)),
                      t.hu.evs || (t.hu.evs = []),
                      t.hu.evs.push(E);
                  }
                }
                return t;
              }),
              (this.Uf = function (t) {
                var n = p.Gf();
                if ('{}' === JSON.stringify(n)) return t;
                var i,
                  e = Z.Bf(n);
                for (i in t.hu.tags) e[i] = t.hu.tags[i];
                t.hu.tags = e;
                var s = {};
                s[B.Po] = n;
                var o = {};
                return (
                  (o[B.kr] = s),
                  (o[B.Dr] = B.no),
                  (o[B.Pr] = p.Ef()),
                  (o[B.br] = p.Ea.pf()),
                  p.oe &&
                    ((n = nt.Rf(p.oe.getPHT(), 0, null, -1)),
                    (s = nt.Rf(p.oe.getBufferLength(), 0, null, -1)),
                    n >= 0 && (o[B.Yo] = n),
                    s > 0 && (o[B.Jo] = s)),
                  t.hu.evs || (t.hu.evs = []),
                  t.hu.evs.push(o),
                  t
                );
              }),
              (this.Gf = function () {
                var t = {};
                if ('undefined' !== typeof navigator && navigator) {
                  if (
                    ((t['c3.fp.cookie'] =
                      'undefined' !== typeof navigator.cookieEnabled && navigator.cookieEnabled
                        ? '' + navigator.cookieEnabled
                        : ''),
                    (t['c3.fp.memory'] =
                      'undefined' !== typeof navigator.deviceMemory && navigator.deviceMemory
                        ? '' + navigator.deviceMemory
                        : ''),
                    (t['c3.fp.hwConc'] =
                      'undefined' !== typeof navigator.hardwareConcurrency && navigator.hardwareConcurrency
                        ? '' + navigator.hardwareConcurrency
                        : ''),
                    (t['c3.fp.java'] =
                      '' + ('function' !== typeof navigator.javaEnabled) ? 'false' : navigator.javaEnabled()),
                    (t['c3.fp.lang'] =
                      'undefined' !== typeof navigator.language && navigator.language ? '' + navigator.language : ''),
                    (t['c3.fp.langs'] =
                      'undefined' !== typeof navigator.languages &&
                      navigator.languages &&
                      navigator.languages.length > 0
                        ? '' + navigator.languages.toString()
                        : ''),
                    (t['c3.fp.maxTp'] =
                      'undefined' !== typeof navigator.maxTouchPoints && navigator.maxTouchPoints
                        ? '' + navigator.maxTouchPoints
                        : ''),
                    (t['c3.fp.plugins'] = ''),
                    'undefined' !== typeof navigator.plugins && navigator.plugins && navigator.plugins.length > 0)
                  )
                    for (var n = 0; n < navigator.plugins.length; n++)
                      t['c3.fp.plugins'] += navigator.plugins[n].name + ',';
                  if (
                    ((t['c3.fp.mime'] = ''),
                    'undefined' !== typeof navigator.mimeTypes && navigator.mimeTypes && navigator.mimeTypes.length > 0)
                  )
                    for (var i = 0; i < navigator.mimeTypes.length; i++)
                      t['c3.fp.mime'] += navigator.mimeTypes[i].type + ',';
                  (t['c3.fp.sysLang'] =
                    'undefined' !== typeof navigator.systemLanguage && navigator.systemLanguage
                      ? '' + navigator.systemLanguage
                      : ''),
                    (t['c3.fp.platform'] =
                      'undefined' !== typeof navigator.platform && navigator.platform ? '' + navigator.platform : ''),
                    (t['c3.fp.product'] =
                      'undefined' !== typeof navigator.product && navigator.product ? '' + navigator.product : ''),
                    (t['c3.fp.productSub'] =
                      'undefined' !== typeof navigator.productSub && navigator.productSub
                        ? '' + navigator.productSub
                        : ''),
                    (t['c3.fp.vendor'] =
                      'undefined' !== typeof navigator.vendor && navigator.vendor ? '' + navigator.vendor : ''),
                    (t['c3.fp.vendorSub'] =
                      'undefined' !== typeof navigator.vendorSub && navigator.vendorSub
                        ? '' + navigator.vendorSub
                        : '');
                  var e = p.jf();
                  '' !== e && (t['c3.fp.canvFp'] = e);
                }
                return (
                  'undefined' !== typeof window &&
                    window &&
                    ('undefined' !== typeof window.screen &&
                      window.screen &&
                      ((t['c3.fp.availHeight'] =
                        'undefined' !== typeof window.screen.availHeight && window.screen.availHeight
                          ? '' + window.screen.availHeight
                          : ''),
                      (t['c3.fp.availWidth'] =
                        'undefined' !== typeof window.screen.availWidth && window.screen.availWidth
                          ? '' + window.screen.availWidth
                          : ''),
                      (t['c3.fp.height'] =
                        'undefined' !== typeof window.screen.height && window.screen.height
                          ? '' + window.screen.height
                          : ''),
                      (t['c3.fp.width'] =
                        'undefined' !== typeof window.screen.width && window.screen.width
                          ? '' + window.screen.width
                          : ''),
                      (t['c3.fp.colorDepth'] =
                        'undefined' !== typeof window.screen.colorDepth && window.screen.colorDepth
                          ? '' + window.screen.colorDepth
                          : ''),
                      (t['c3.fp.deviceXDPI'] =
                        'undefined' !== typeof window.screen.deviceXDPI && window.screen.deviceXDPI
                          ? '' + window.screen.deviceXDPI
                          : ''),
                      (t['c3.fp.deviceYDPI'] =
                        'undefined' !== typeof window.screen.deviceYDPI && window.screen.deviceYDPI
                          ? '' + window.screen.deviceYDPI
                          : '')),
                    (t['c3.fp.dpi'] =
                      'undefined' !== typeof window.devicePixelRatio && window.devicePixelRatio
                        ? '' + window.devicePixelRatio
                        : ''),
                    (t['c3.fp.secure'] =
                      'boolean' === typeof window.isSecureContext ? '' + window.isSecureContext : '')),
                  t
                );
              }),
              (this.jf = function () {
                try {
                  if ('undefined' !== typeof document && document) {
                    var t = document.createElement('CANVAS');
                    if ('undefined' !== typeof t && t && 'function' === typeof t.getContext) {
                      var n = t.getContext('2d'),
                        i = 'conviva';
                      return (
                        (n.textBaseline = 'top'),
                        (n.font = '14px Arial'),
                        (n.textBaseline = 'alphabetic'),
                        (n.fillStyle = '#f40'),
                        n.fillRect(
                          'undefined' !== typeof navigator.plugins && navigator.plugins ? navigator.plugins.length : 0,
                          'undefined' !== typeof navigator.mimeTypes && navigator.mimeTypes
                            ? navigator.mimeTypes.length
                            : 0,
                          'undefined' !== typeof navigator.product && navigator.product ? navigator.product.length : 0,
                          'undefined' !== typeof navigator.vendor && navigator.vendor ? navigator.vendor.length : 0,
                        ),
                        (n.fillStyle = '#069'),
                        n.fillText(
                          i,
                          'undefined' !== typeof navigator.maxTouchPoints && navigator.maxTouchPoints >= 0
                            ? navigator.maxTouchPoints
                            : 0,
                          'undefined' !== typeof navigator.product && navigator.product ? navigator.product.length : 0,
                        ),
                        (n.fillStyle = 'rgba(102, 204, 0, 0.7)'),
                        n.fillText(
                          i,
                          'undefined' !== typeof navigator.deviceMemory && navigator.deviceMemory
                            ? navigator.deviceMemory
                            : 0,
                          'undefined' !== typeof navigator.hardwareConcurrency && navigator.hardwareConcurrency
                            ? navigator.hardwareConcurrency
                            : 0,
                        ),
                        H.js(t.toDataURL())
                      );
                    }
                  }
                  return '';
                } catch (t) {
                  return '';
                }
              }),
              (this.Ha = function () {
                var t;
                p.Zh || ((t = p.Pf()) && p.Kf(t));
              }),
              (this.Af = function () {
                var t;
                p.vn !== u.PlayerState.PLAYING ||
                  !p.oe ||
                  ((t = p.oe.getRenderedFrameRate()) > 0 && ((p.ia += t), p.na++));
              }),
              (this.Mf = function () {
                return p.ia > 0 && p.na > 0
                  ? Z.Wf.Cast(+p.ia / p.na)
                  : (this.Af(), p.ia > 0 && p.na > 0 ? Z.Wf.Cast(+p.ia / p.na) : u.DEFAULT_RENDERED_FRAME_RATE);
              }),
              (this.Kf = function (t) {
                p.Cf();
                var i = p.Nh - 1;
                p.c.info('postHeartbeat(): Send HB[' + i + ']' + p.Ia());
                p.pa.xf(t, function (t, n) {
                  p.qf(t, n, i);
                });
              }),
              (this.qf = function (e, s, o) {
                p.Zh ||
                  p.w.m('onHeartbeatResponse', function () {
                    var t, n, i;
                    e
                      ? s
                        ? (p.c.debug('onHeartbeatResponse(): received valid response for HB[' + o + ']'),
                          p.yf(o),
                          !(i = s[B.ho]) ||
                            (i !== (t = p.Ta.get(Y.D)) &&
                              (p.c.debug('onHeartbeatResponse(): setting the client id to ' + i + ' (from gateway)'),
                              p.Ta.set(Y.D, i),
                              p.Ta.Yf(),
                              t === B.P && i !== B.P && p.Hi.y())),
                          (t = s[B.uo]) && t !== B.ro && p.c.error('onHeartbeatResponse(): error from gateway: ' + t),
                          'object' === typeof (i = s[B.ao]) &&
                            ((t = i[B.co]) >= 0 &&
                              p.Ta.get(Y.Df) !== t &&
                              (p.c.debug(
                                'onHeartbeatResponse(): setting Maximum Heartbeat Infos to ' + t + ' (from gateway)',
                              ),
                              p.Ta.set(Y.Df, t)),
                            (t = i[B.lo]),
                            (t = !!Z.Ii(t) && t) !== p.Ta.get(Y.Lf) &&
                              (p.c.debug('onHeartbeatResponse(): turning ' + (t ? 'on' : 'off') + ' sending of logs'),
                              p.Ta.set(Y.Lf, t)),
                            (t = i[B.vo]),
                            !Z.lt(t) ||
                              ((n = Z.Wf.Cast(t)) !== p.ui.heartbeatInterval &&
                                (p.c.debug('onHeartbeatResponse(): received hbIntervalMs from gateway: ' + n),
                                (p.ui.heartbeatInterval = n),
                                p.Sh && p.Ga())),
                            (n = i[B.do]) &&
                              n !== p.ui.gatewayUrl &&
                              (p.c.debug('onHeartbeatResponse(): received gatewayUrl from gateway: ' + n),
                              (p.ui.gatewayUrl = n)),
                            p.Jf() ||
                              ((p.ea = {}),
                              (n = i[B.Eo]) &&
                                (p.sa || (p.sa = !0),
                                p.c.debug('onHeartbeatResponse(): received fp from gateway: ' + n),
                                (p.ea = n.split(','))),
                              (p.la = i[B.po]),
                              Z.Ii(p.la) &&
                                (p.la
                                  ? (p.c.debug('onHeartbeatResponse(): enabling the CDN Server IP collection'),
                                    p.fa || p.Wa())
                                  : p.ka()))))
                        : p.c.warning('onHeartbeatResponse(): decoded heartbeat response is null.')
                      : ((i = s),
                        Z.wt(i)
                          ? Z.Xf(i, 'HTTP timeout')
                            ? p.c.warning('onHeartbeatResponse(): ' + i)
                            : p.c.error('onHeartbeatResponse(): failed to send heartbeat: ' + i)
                          : ((i = W.Qf), p.c.error('onHeartbeatResponse(): ' + i)),
                        p.If(o, i));
                  });
              }),
              (this.Ef = function () {
                return Z.Wf.Cast(p.wa.current() - p.gh);
              }),
              (this.Nf = function () {
                return this.Ea.pf();
              }),
              (this.Ia = function () {
                return this.Da() ? ' (global session)' : '';
              }),
              (this.Da = function () {
                return this.Oa === K.ct.tu;
              }),
              (this.Jf = function () {
                return this.Oa === K.ct.tu && 'T' === this.Ph['c3.IPV4IPV6GlobalSession'];
              }),
              (this._a = function () {
                return this.Oa === K.ct.ft;
              }),
              (this.Aa = function () {
                return this.Oa === K.ct.Rt;
              }),
              (this.St = function (t) {
                p.Zf(t), p.ba();
              }),
              (this.Zf = function (t) {
                var n = {},
                  i = {};
                if (
                  (Z.wt(t.assetName) &&
                    (p.Et.assetName !== t.assetName
                      ? (p.Et.assetName && (n[B.Do] = p.Et.assetName),
                        (i[B.Do] = t.assetName),
                        (p.Et.assetName = t.assetName))
                      : p.c.warning('mergeContentMetadata(): assetName was not changed.')),
                  Z.wt(t.applicationName) &&
                    (p.Et.applicationName !== t.applicationName
                      ? (p.Et.applicationName && (n[B.bo] = p.Et.applicationName),
                        (i[B.bo] = t.applicationName),
                        (p.Et.applicationName = t.applicationName))
                      : p.c.warning('mergeContentMetadata(): applicationName was not changed.')),
                  Z.wt(t.streamUrl) &&
                    (p.Et.streamUrl !== t.streamUrl
                      ? (p.Et.streamUrl && (n[B.Xo] = p.Et.streamUrl),
                        (i[B.Xo] = t.streamUrl),
                        (p.Et.streamUrl = t.streamUrl),
                        (p.rn = p.Et.streamUrl))
                      : p.c.warning('mergeContentMetadata(): streamUrl was not changed.')),
                  Z.wt(t.viewerId) &&
                    (p.Et.viewerId !== t.viewerId
                      ? (p.Et.viewerId && (n[B.mo] = p.Et.viewerId),
                        (i[B.mo] = t.viewerId),
                        (p.Et.viewerId = t.viewerId))
                      : p.c.warning('mergeContentMetadata(): viewerId was not changed.')),
                  Z.wt(t.defaultResource) &&
                    (p.Et.defaultResource !== t.defaultResource
                      ? (p.Et.defaultResource && (n[B.qo] = p.Et.defaultResource),
                        (i[B.qo] = t.defaultResource),
                        (p.Et.defaultResource = t.defaultResource))
                      : p.c.warning('mergeContentMetadata(): defaultResource was not changed.')),
                  Z.lt(t.duration) &&
                    t.duration > 0 &&
                    (p.Et.duration !== t.duration
                      ? (p.mh > 0 && (n[B.Go] = p.mh),
                        (i[B.Go] = t.duration),
                        (p.Et.duration = t.duration),
                        (p.mh = p.Et.duration))
                      : p.c.warning('mergeContentMetadata(): duration was not changed.')),
                  Z.lt(t.encodedFrameRate) &&
                    t.encodedFrameRate > 0 &&
                    (p.Et.encodedFrameRate !== t.encodedFrameRate
                      ? (p.Et.encodedFrameRate > -1 && (n[B.jo] = p.Et.encodedFrameRate),
                        (i[B.jo] = t.encodedFrameRate),
                        (p.Et.encodedFrameRate = t.encodedFrameRate),
                        (p.fn = p.Et.encodedFrameRate))
                      : p.c.warning('mergeContentMetadata(): encodedFrameRate was not changed.')),
                  t.streamType !== c.StreamType.UNKNOWN &&
                    (p.Et.streamType !== t.streamType
                      ? (p.Et.streamType !== c.StreamType.UNKNOWN &&
                          (p.Et.streamType === c.StreamType.LIVE ? (n[B.go] = !0) : (n[B.go] = !1)),
                        t.streamType === c.StreamType.LIVE ? (i[B.go] = !0) : (i[B.go] = !1),
                        (p.Et.streamType = t.streamType))
                      : p.c.warning('mergeContentMetadata(): streamType was not changed.')),
                  Z.It(t.custom) > 0)
                ) {
                  var e,
                    s = {},
                    o = {};
                  for (e in t.custom)
                    p.Et.custom[e] !== t.custom[e]
                      ? ((s[e] = t.custom[e]),
                        p.Et.custom[e] && (o[e] = p.Et.custom[e]),
                        (p.Et.custom[e] = t.custom[e]))
                      : p.c.info('mergeContentMetadata(): custom.' + e + ' was not changed.');
                  Z.It(s) > 0
                    ? (Z.It(o) > 0 && (n[B.Po] = o), (i[B.Po] = s))
                    : p.c.warning('mergeContentMetadata(): custom was not changed.');
                }
                Z.It(i) > 0 && this.Ja(i, n);
              }),
              (this.ba = function () {
                var t;
                p.c.debug('setStatesFromContentMetadata()'),
                  p.Et.defaultResource && this.Vu(p.Et.defaultResource),
                  p.Et.streamUrl && this.rh(p.Et.streamUrl),
                  p.Et.duration > 0 && this.Lu(p.Et.duration),
                  p.Et.encodedFrameRate > 0 && this.ku(p.Et.encodedFrameRate),
                  p.Et.streamType !== c.StreamType.UNKNOWN && ((t = p.Et.streamType === c.StreamType.LIVE), this.du(t)),
                  p.Et.assetName && this._u(p.Et.assetName),
                  p.Et.viewerId && this.Ou(p.Et.viewerId),
                  (p.Et.applicationName || p.Et.playerName) && this.Au(p.Et.applicationName || p.Et.playerName),
                  Z.It(p.Et.custom) > 0 && this.Cu(p.Et.custom);
              }),
              (this.Pa = function () {
                var t = {};
                if (
                  (this.Da() ||
                    (p.Et.assetName
                      ? (t[B.Do] = p.Et.assetName)
                      : p.c.warning('enqueueEventForContentMetadata(): assetName was not set.'),
                    p.Et.applicationName
                      ? (t[B.bo] = p.Et.applicationName)
                      : p.c.warning('enqueueEventForContentMetadata(): applicationName was not set.'),
                    p.Et.streamUrl
                      ? (t[B.Xo] = p.Et.streamUrl)
                      : p.c.warning('enqueueEventForContentMetadata(): streamUrl was not set.'),
                    p.Et.viewerId
                      ? (t[B.mo] = p.Et.viewerId)
                      : p.c.warning('enqueueEventForContentMetadata(): viewerId was not set.'),
                    p.Et.defaultResource
                      ? (t[B.qo] = p.Et.defaultResource)
                      : p.c.warning('enqueueEventForContentMetadata(): defaultResource was not set.'),
                    p.Et.duration > -1
                      ? (t[B.Go] = p.Et.duration)
                      : p.c.warning('enqueueEventForContentMetadata(): duration was not set.'),
                    p.Et.encodedFrameRate > -1
                      ? (t[B.jo] = p.Et.encodedFrameRate)
                      : p.c.warning('enqueueEventForContentMetadata(): encodedFrameRate was not set.'),
                    p.Et.streamType !== c.StreamType.UNKNOWN
                      ? p.Et.streamType === c.StreamType.LIVE
                        ? (t[B.go] = !0)
                        : (t[B.go] = !1)
                      : p.c.warning('enqueueEventForContentMetadata(): streamType was not set.')),
                  Z.It(p.Et.custom) > 0)
                )
                  for (var n in ((t[B.Po] = {}), p.Et.custom)) t[B.Po][n] = p.Et.custom[n];
                else this.Da() || p.c.warning('enqueueEventForContentMetadata(): custom tags were not set.');
                Z.It(t) > 0 && this.Ja(t, null);
              }),
              (this.La = function () {
                (p.Et && Z.wt(p.Et.assetName)) || p.c.warning('Missing assetName during session creation'),
                  (p.Et && Z.wt(p.Et.defaultResource)) || p.c.warning('Missing resource during session creation'),
                  (p.Et && Z.wt(p.Et.streamUrl)) || p.c.warning('Missing streamUrl during session creation'),
                  (!p.Et || p.Et.encodedFrameRate <= 0) &&
                    p.c.warning('Missing encodedFrameRate during session creation'),
                  (p.Et && Z.wt(p.Et.viewerId)) || p.c.warning('Missing viewerId during session creation'),
                  (p.Et && p.Et.streamType && c.StreamType.UNKNOWN !== p.Et.streamType) ||
                    p.c.warning('Missing streamType during session creation'),
                  (p.Et && Z.wt(p.Et.applicationName)) ||
                    p.c.warning('Missing applicationName during session creation'),
                  (!p.Et || p.Et.duration <= 0) && p.c.warning('Missing duration during session creation');
              }),
              (this.Ft = function (t, n) {
                p.Jh || (p.Jh = {}), (p.Jh[t] = n);
              }),
              (this.Ma = function () {
                var t = {};
                p.Hi.A && ((t[B.tr] = p.Hi.A), (p.A = p.Hi.A)),
                  p.Hi.C && ((t[B.nr] = p.Hi.C), (p.C = p.Hi.C)),
                  Z.It(t) > 0 && this.Ja(t, null);
              });
          });
        (K.Ca = B.$r.ft + B.$r.nu + B.$r.iu), (K.ct = { ft: 'Video', tu: 'Global', Rt: 'Ad' });
        var W = (ht.Session = function () {
          var e = this;
          (e.oe = null),
            (e.S = 0),
            (e.Oa = K.ct.ft),
            (e.zf = !1),
            (e.Zh = !1),
            (e.$f = !1),
            (e.tc = null),
            (e.Gi = null),
            (e.nc = null),
            (e.ic = !1),
            (e.ec = u.PlayerState.NOT_MONITORED),
            (e.sc = !1),
            (e.oc = !1),
            (e.rc = !1),
            (e.uc = !1),
            (e.hc = !1),
            function (t, n, i, e, s, o, r) {
              (this.S = t), (this.Oa = n), (this.Ta = i), (this.ac = e), (this.dt = s), (this.w = o), (this.c = r);
            }.apply(e, arguments),
            (this.ga = function (t, n) {
              e.dt.ga(this),
                t && e.Ot(t),
                e.Ta.fc()
                  ? e.cc(n)
                  : e.Ta.lc(function () {
                      e.cc(n);
                    });
            }),
            (this.cleanup = function () {
              (e.zf = !0),
                e.dt.ya(),
                e.Ta.fc()
                  ? e.vc()
                  : e.Ta.lc(function () {
                      e.vc();
                    });
            }),
            (this.dc = function () {
              (e._a() || e.Aa()) && e.oe && e.Ec(),
                (e.w = null),
                (e.Hi = null),
                (e.Ta = null),
                (e.ac = null),
                e.dt.ut(),
                (e.dt = null),
                (e.Zh = !0);
            }),
            (this.vc = function () {
              e.dt.Ua(), e.dc();
            }),
            (this.cc = function (t) {
              e.dt.ma(),
                e.pc(),
                t ? (e.Tt(t.ms(), t.Ds()), e.dt.we(u.PlayerState.STOPPED), e.dt.Ua(), e.dc()) : e.dt.Ba();
            }),
            (this.pc = function () {
              var t = e.ac.get(),
                n = t[ot.BROWSER_NAME];
              n && e.dt.ju(n);
              n = t[ot.BROWSER_VERSION];
              n && e.dt.Ku(n);
              n = t[ot.DEVICE_BRAND];
              n && e.dt.Wu(n);
              n = t[ot.DEVICE_MANUFACTURER];
              n && e.dt.xu(n);
              n = t[ot.DEVICE_MODEL];
              n && e.dt.qu(n);
              n = t[ot.DEVICE_TYPE];
              n && e.dt.Yu(n);
              n = t[ot.DEVICE_VERSION];
              n && e.dt.Ju(n);
              n = t[ot.FRAMEWORK_NAME];
              n && e.dt.Xu(n);
              n = t[ot.FRAMEWORK_VERSION];
              n && e.dt.Qu(n);
              n = t[ot.OPERATING_SYSTEM_NAME];
              n && e.dt.Zu(n);
              n = t[ot.OPERATING_SYSTEM_VERSION];
              n && e.dt.zu(n);
              n = t[ot.DEVICE_CATEGORY];
              n && e.dt.$u(n);
              n = t[ot.SCREEN_WIDTH];
              n && e.dt.th(n);
              n = t[ot.SCREEN_HEIGHT];
              n && e.dt.nh(n);
              t = t[ot.SCALE_FACTOR];
              t && e.dt.ih(t);
            }),
            (this.Gn = function (t) {
              e.dt.vn !== t &&
                (e.dt.vn === u.PlayerState.NOT_MONITORED && t !== u.PlayerState.NOT_MONITORED && (e.ec = t),
                e.ic || e.dt.we(t));
            }),
            (this.jn = function (t) {
              e.sc || e.dt.Xa(t);
            }),
            (this.Qn = function (t) {
              e.oc || e.dt.eh(t);
            }),
            (this.Zn = function (t) {
              e.oc || e.dt.ze(t);
            }),
            (this.Kn = function (t, n) {
              Z.lt(n) || (n = -1), e.dt.Of(t, n);
            }),
            (this.Cn = function (t) {
              t > 0 && (e.uc || e.dt.ku(t));
            }),
            (this.mn = function (t) {
              t > 0 && (e.uc || e.dt.Lu(t));
            }),
            (this.Dn = function (t) {
              e.dt.rh(t);
            }),
            (this.Wn = function (t) {
              e.dt.if(t);
            }),
            (this.xn = function (t) {
              e.dt.sf(t);
            }),
            (this.W = function (t) {
              e.dt.ah(t);
            }),
            (this.Y = function (t) {
              e.dt.fh(t);
            }),
            (this.Ln = function (t) {
              e.dt.ja() || e.dt.Xu(t);
            }),
            (this.Vn = function (t) {
              e.dt.Ka() || e.dt.Qu(t);
            }),
            (this.Yn = function (t) {
              e.dt.dh(t);
            }),
            (this.qn = function (t, n) {
              e.Tt(t, n);
            }),
            (this._n = function () {
              e.Ec();
            }),
            (this.bt = function (t, n, i) {
              e.$f ||
                ((e.$f = !0),
                (e.tc = t),
                (e.Gi = n),
                (e.nc = i),
                e.dt.ff(!0),
                e.tc === a.AdStream.CONTENT || e.Gi === a.AdPlayer.SEPARATE
                  ? (e.dt.vn !== u.PlayerState.NOT_MONITORED && (e.ec = e.dt.vn),
                    e.dt.we(u.PlayerState.NOT_MONITORED),
                    (e.ic = !0))
                  : e.tc === a.AdStream.SEPARATE &&
                    e.Gi === a.AdPlayer.CONTENT &&
                    (e.dt.vn !== u.PlayerState.NOT_MONITORED && (e.ec = e.dt.vn),
                    e.dt.we(u.PlayerState.NOT_MONITORED),
                    (e.ic = !0),
                    (e.sc = !0),
                    (e.oc = !0),
                    (e.uc = !0),
                    (e.rc = !0)));
            }),
            (this.Pt = function () {
              e.$f &&
                (e.dt.ff(!1),
                e.tc === a.AdStream.CONTENT || e.Gi === a.AdPlayer.SEPARATE
                  ? e.Rc || ((e.ic = !1), e.dt.we(e.ec))
                  : e.tc === a.AdStream.SEPARATE &&
                    e.Gi === a.AdPlayer.CONTENT &&
                    ((e.sc = !1),
                    (e.oc = !1),
                    (e.uc = !1),
                    (e.rc = !1),
                    (e.hc = !1),
                    e.Rc || ((e.ic = !1), e.dt.we(e.ec))),
                (e.$f = !1),
                (e.tc = e.Gi = e.nc = null));
            }),
            (this.gt = function () {
              e.oe &&
                e.oe &&
                (e.w.m('Session.detachPlayer', function () {
                  e.oe.An();
                }),
                (e.oe = null),
                e.dt.Tf(null),
                e.dt.we(u.PlayerState.NOT_MONITORED));
            }),
            (this.Ec = function () {
              e.oe &&
                (e.w.m('Session.releasePlayerStateManager', function () {
                  e.oe.An();
                }),
                (e.oe = null),
                e.dt.Tf(null),
                e.dt.we(u.PlayerState.NOT_MONITORED));
            }),
            (this.Nt = function () {
              e.dt.ff(!0),
                e.dt.vn !== u.PlayerState.NOT_MONITORED && (e.ec = e.dt.vn),
                e.dt.we(u.PlayerState.NOT_MONITORED),
                (e.ic = !0);
            }),
            (this.Ot = function (t) {
              e.oe ||
                (t instanceof u &&
                  e.w.m('Session.attachPlayer()', function () {
                    t.setMonitoringNotifier(e, e.S) && (t.kn(), (e.oe = t), e.dt.Tf(e.oe));
                  }));
            }),
            (this._t = function () {
              e.dt.ff(!1),
                (e.sc = !1),
                (e.oc = !1),
                (e.uc = !1),
                (e.rc = !1),
                (e.hc = !1),
                e.Rc || ((e.ic = !1), e.ec !== u.PlayerState.NOT_MONITORED && e.dt.we(e.ec));
            }),
            (this.Lt = function () {
              return e.oe;
            }),
            (this.At = function () {
              e.Rc || ((e.Rc = !0), (e.ic = !0));
            }),
            (this.Ct = function () {
              e.Rc && ((e.Rc = !1), e.$f || ((e.ic = !1), e.ec !== u.PlayerState.NOT_MONITORED && e.dt.we(e.ec)));
            }),
            (this.Tt = function (t, n) {
              Z.wt(t) &&
                ((n !== a.ErrorSeverity.FATAL && n !== a.ErrorSeverity.WARNING) ||
                  e.hc ||
                  ((n = n === a.ErrorSeverity.FATAL), e.dt.lf(t, n)));
            }),
            (this.St = function (t) {
              e.w.m('Session.updateContentMetadata', function () {
                e.dt.St(t);
              });
            }),
            (this.Dt = function (t, n) {
              e.dt._f(t, n);
            }),
            (this.Da = function () {
              return e.Oa === K.ct.tu;
            }),
            (this._a = function () {
              return e.Oa === K.ct.ft;
            }),
            (this.Aa = function () {
              return e.Oa === K.ct.Rt;
            }),
            (this.Ia = function () {
              return e.Da() ? ' (global session)' : '';
            }),
            (this.Vt = function () {
              return this.S;
            }),
            (this.kt = function () {
              var t = null;
              return e.Ta.fc() && (t = e.Ta.get(Y.D)), t;
            }),
            (this.Ft = function (t, n) {
              e.dt.Ft(t, n);
            });
        });
        W.Qf = 'received no response (or a bad response) to heartbeat POST request';
        var x = (ht.SessionFactory = function () {
            var o = this;
            (o.ai = null),
              (o.wc = 0),
              (o.Tc = null),
              function (t, n, i, e) {
                (o.Hi = t), (o.ui = n), (o.Ta = i), (o.v = e), (o.wc = 0), (o.Tc = {});
              }.apply(o, arguments),
              (this.ut = function () {
                for (var t in (0, (o.ai = null), o.Tc)) o.Tc[t].cleanup();
                (o.Tc = null), (o.wc = 0);
              }),
              (this.Sc = function () {
                var t = o.wc;
                return o.wc++, t;
              }),
              (this.ht = function (t, n, i, e, s) {
                return t || (t = new c()), o.gc(t, n, i, e, s);
              }),
              (this.k = function (t) {
                return o.gc(t, K.ct.tu, void 0, T.version);
              }),
              (this.Nc = function () {
                return tt.Oc();
              }),
              (this.gc = function (t, n, i, e, s) {
                (t = o.v.Ni(o.Hi, o.ui, o.Ta, o.Nc(), n, t.z(), e)), (e = o.Sc());
                return (
                  'undefined' !== typeof s && 'undefined' !== typeof s.error ? t.ga(i, s.error) : (o._c(e, t), t.ga(i)),
                  e
                );
              }),
              (this.mt = function (t) {
                t = o.Tc[t];
                return t;
              }),
              (this.vt = function (t) {
                t = this.mt(t);
                return t && (t._a() || t.Aa() || (t = null)), t;
              }),
              (this._c = function (t, n) {
                o.Tc[t] = n;
              }),
              (this.Ac = function (t) {
                delete o.Tc[t];
              }),
              (this.Mt = function (t) {
                var n = o.mt(t);
                o.Ac(t), n.cleanup();
              }),
              (this.K = function () {
                return o.Tc;
              });
          }),
          q = (ht.Cc = function (t) {
            (this.Bi = t),
              (this.Ic = function (i, t, n) {
                var e = !1;
                this.Bi.createOnce(
                  function () {
                    e || i(!(e = !0), n + ' (' + t + ' ms)');
                  },
                  t,
                  'CallbackWithTimeout.wrap',
                );
                return function (t, n) {
                  e || ((e = !0), i(t, n));
                };
              });
          }),
          Y = (ht.Config = function (t, n, i) {
            var e = this;
            (this.yc = n),
              (this.mc = i),
              (this.Dc = { clientId: B.P, iid: B.Ys, sendLogs: !1, maxHbInfos: B.Xs }),
              (this.T = Z.Bf(this.Dc)),
              (this.bc = !1),
              (this.Pc = !1),
              (this.Mc = []),
              (this.fc = function () {
                return this.bc;
              }),
              (this.it = function () {
                this.yc.it(Y.Lc, function (t, n) {
                  t && e.Uc(n), (e.bc = !0), e.Vc();
                });
              }),
              (this.Uc = function (t) {
                var n = this.mc.ru(t);
                n
                  ? n &&
                    ((t = n[Y.kc]),
                    (n = n[Y.et]),
                    t && t !== B.P && '' !== t && 'null' !== t && (this.T[Y.D] = t),
                    n !== B.Ys && '' !== n && 'null' !== n && (this.T[Y.et] = n))
                  : (this.Pc = !0);
              }),
              (this.Fc = function () {
                var t = {};
                return (t[Y.kc] = this.T.clientId), this.mc.ou(t);
              }),
              (this.Yf = function () {
                this.yc.Yf(Y.Lc, this.Fc(), function () {
                  0;
                });
              }),
              (this.lc = function (t) {
                this.fc() ? t() : this.Mc.push(t);
              }),
              (this.get = function (t) {
                return this.bc ? this.T[t] : null;
              }),
              (this.set = function (t, n) {
                this.bc && (this.T[t] = n);
              }),
              (this.Vc = function () {
                for (var t; 'undefined' !== typeof (t = this.Mc.shift()); ) t();
              });
          });
        (Y.Lc = 'sdkConfig'),
          (Y.kc = 'clId'),
          (Y.et = 'iid'),
          (Y.D = 'clientId'),
          (Y.Lf = 'sendLogs'),
          (Y.Df = 'maxHbInfos'),
          (Y.kf = 'c3.fp.'),
          (Y.Bt = { Ff: '0', Hc: '1', Gt: '2', Ht: '3', Hf: '4', Kt: '5', jt: '6' });
        var J = (ht.EventQueue = function () {
            (this.Bc = []),
              (this.Gc = 0),
              (this.wf = function (t) {
                this.Bc.push(t);
              }),
              (this.pf = function () {
                var t = this.Gc;
                return this.Gc++, t;
              }),
              (this.Sa = function () {
                var t = this.Bc;
                return (this.Bc = []), t;
              });
          }),
          X = (ht.ExceptionCatcher = function (t, n, i) {
            (this.jc = n),
              (this.R = i),
              (this.m = function (n, t, i) {
                try {
                  t();
                } catch (t) {
                  if (i) i(t);
                  else {
                    if (this.R.allowUncaughtExceptions) throw t;
                    this.Kc(n, t);
                  }
                }
              }),
              (this.Kc = function (t, n) {
                var i = 'Uncaught exception: ' + t + ': ' + n.toString();
                if (this.jc)
                  try {
                    this.jc.xf(i);
                  } catch (t) {
                    0;
                  }
              });
          }),
          Q = (ht.GatewayControl = function (t, n, i, e, s) {
            var o = this;
            (this.ui = t),
              (this.Wc = i),
              (this.mc = e),
              (this.xc = s),
              (this.xf = function (t, e) {
                var n = (this.xc ? (this.xc.indexOf('ipv4') > -1 ? this.ui.M : this.ui.F) : this.ui.gatewayUrl) + B.qs;
                this.Wc.qc('POST', n, this.mc.ou(t), 'application/json', function (t, n) {
                  var i;
                  t ? ((i = o.mc.ru(n)), e(t, i)) : e(t, n);
                });
              });
          }),
          Z = (ht.Lang = {});
        (Z.Yc = function (t) {
          return Z.wt(t) && t && 'undefined' !== t && 'null' !== t;
        }),
          (Z.yt = function (t) {
            var n,
              i,
              e = {};
            for (n in t) Z.Yc(n) && ((i = t[n]), Z.Yc(i) && (e[n] = i));
            return e;
          }),
          (Z.In = function (t, n, i) {
            if (!t) throw new Error('Expected ' + i + ' implementation is null.');
            for (var e in n)
              if ('function' !== typeof t[e]) throw new Error('Expected method ' + e + ' in ' + i + ' implementation.');
          }),
          (Z.It = function (t) {
            var n,
              i = 0;
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && i++;
            return i;
          }),
          (Z.pt = function (t) {
            return '' + t;
          }),
          (Z.Jc = function (t) {
            return Math.floor(t);
          }),
          (Z.Xt = function (t) {
            return Math.abs(Z.Jc(t));
          }),
          (Z.Xc = function (t) {
            return Boolean(t);
          }),
          (Z.wt = function (t) {
            return 'string' === typeof t && '' !== t;
          }),
          (Z.Xf = function (t, n) {
            return (
              'string' === typeof t && 'string' === typeof n && 'function' === typeof t.indexOf && 0 === t.indexOf(n)
            );
          }),
          (Z.Ii = function (t) {
            return 'boolean' === typeof t;
          }),
          (Z.Qc = function (t) {
            return escape(t);
          }),
          (Z.uu = function (t) {
            return 'object' === typeof t;
          }),
          (Z.tf = function (t) {
            var n,
              i = '';
            for (n in t) i += n + '=' + t[n];
            return 'Object{' + i + '}';
          }),
          (Z.Zc = function (t) {
            var n,
              i = Z.Bf(t);
            for (n in i) i[n] || delete i[n];
            return i;
          }),
          (Z.Bf = function (t) {
            var n,
              i = {};
            for (n in t) i[n] = t[n];
            return i;
          }),
          (Z.$a = function (t, n) {
            if (typeof t !== typeof n) return !1;
            if (t instanceof Object && n instanceof Object) {
              if (Z.It(t) !== Z.It(n)) return !1;
              for (var i in t) if (!(t[i] === n[i])) return !1;
              return !0;
            }
            return t === n;
          }),
          (Z.as = function () {
            for (var t = {}, n = 0; n < arguments.length; n++)
              for (var i in arguments[n]) arguments[n][i] && (t[i] = arguments[n][i]);
            return t;
          }),
          (Z.lt = function (t) {
            return 'number' === typeof t && Math.round(t) === t;
          }),
          (Z.zc = function (t) {
            return '[object Array]' === Object.prototype.toString.call(t);
          }),
          (Z.$c = function (t, n) {
            if (t === n) return !0;
            if (!t || !n) return !1;
            if (t.length !== n.length) return !1;
            for (var i = 0; i < t.length; ++i)
              if (Z.zc(t[i]) && Z.zc(n[i])) {
                if (!Z.$c(t[i], n[i])) return !1;
              } else if (t[i] !== n[i]) return !1;
            return !0;
          }),
          (Z.tl = function () {
            return (
              'undefined' !== typeof Object.defineProperty &&
              (function () {
                try {
                  return Object.defineProperty({}, 'x', {}), !0;
                } catch (t) {
                  return !1;
                }
              })()
            );
          }),
          (Z.xt = function (t, n, i) {
            if (Z.tl()) Object.defineProperty(t, n, { configurable: !0, enumerable: !0, get: i });
            else {
              if ('undefined' === typeof t.__defineGetter__)
                throw new Error('JavaScript runtime must support either Object.defineProperty or __defineGetter__');
              t.__defineGetter__(n, i);
            }
          }),
          (Z.qt = function (t, n, i) {
            if (Z.tl()) Object.defineProperty(t, n, { configurable: !0, set: i });
            else {
              if ('undefined' === typeof t.__defineSetter__)
                throw new Error('JavaScript runtime must support either Object.defineProperty or __defineSetter__');
              t.__defineSetter__(n, i);
            }
          }),
          (function () {
            var n = { two32: 4294967296 };
            (n.nl = n.two32 - 1),
              (n.il = 0),
              (Z.el = n),
              (Z.el.Cast = function (t) {
                t = parseInt(t, 10);
                return t > n.nl ? (t = t % n.two32) : t < n.il && ((t = -t % n.two32), (t = n.two32 - t)), t;
              }),
              (Z.el.sl = function (t) {
                t = parseInt(t, 10);
                return t <= n.nl && t >= n.il;
              });
            var i = { nl: 2147483647, il: -2147483648 };
            (Z.Wf = i),
              (Z.Wf.Cast = function (t) {
                t = parseInt(t, 10);
                return t > i.nl ? (t = t % i.nl) : t < i.il && ((t = -t % i.nl), (t = i.nl - t)), t;
              }),
              (Z.Wf.sl = function (t) {
                t = parseInt(t, 10);
                return t <= i.nl && t >= i.il;
              }),
              (Z.ys = function () {
                return window && window.location && window.location.search ? window.location.search : '';
              }),
              (Z.ol = function () {
                return document && document.referrer ? document.referrer : '';
              });
          })();
        var z = (ht.LogBuffer = function () {
            (this.rl = []),
              (this.ks = function (t) {
                this.rl.length >= 32 && this.rl.shift(), this.rl.push(t);
              }),
              (this.Sa = function () {
                var t = this.rl;
                return (this.rl = []), t;
              });
          }),
          $ = (ht.Ping = function (t, n, i, e) {
            (this.ul = !1),
              (this.hl = null),
              (this.c = t),
              this.c.setModuleName('Ping'),
              (this.Wc = n),
              (this.ui = i),
              (this.hi = e),
              (this.xf = function (t) {
                this.ul ||
                  ((this.ul = !0),
                  (t = this.al() + '&d=' + Z.Qc(t.toString())),
                  this.c.error('send(): ' + t),
                  this.Wc.qc('GET', t, null, null, null),
                  (this.ul = !1));
              }),
              (this.al = function () {
                if (!this.hl) {
                  var t = $.fl + '?comp=' + $.cl + '&clv=' + (this.hi || a.version);
                  if ((this.ui && (t += '&cid=' + this.ui.customerKey), (t += '&sch=' + B.$s), !this.ui)) return t;
                  this.hl = t;
                }
                return this.hl;
              });
          });
        ($.cl = 'sdkjs'), ($.fl = 'https://pings.conviva.com/ping.ping');
        var tt = (ht.ll = {});
        (tt.vl = 4294967295),
          (tt.dl = 2147483647),
          (tt.El = -2147483648),
          (tt.Oc = function () {
            return Math.floor(Math.random() * tt.vl) + tt.El;
          }),
          (tt.ot = function () {
            return Math.floor(Math.random() * tt.vl);
          });
        var nt = (ht.pl = {});
        (nt.Rf = function (t, n, i, e) {
          if (isNaN(t)) return e;
          if ('number' !== typeof t) return e;
          if (t === e) return e;
          t = Z.Jc(t);
          return nt.Rl(t, n, i);
        }),
          (nt.Rl = function (t, n, i) {
            return Z.lt(i) && t > i ? (t = i) : Z.lt(n) && t < n && (t = n), t;
          }),
          (nt.an = function (t) {
            return -1 === t || -2 === t ? t : (t = nt.Rf(t, 0, null, -1));
          });
        var it = (ht.StreamerError = function () {
            var i = this;
            (i.errorCode = null),
              (i.severity = a.ErrorSeverity.FATAL),
              function (t, n) {
                (i.errorCode = t), (i.severity = n);
              }.apply(i, arguments),
              (this.ms = function () {
                return i.errorCode;
              }),
              (this.Ds = function () {
                return i.severity;
              });
          }),
          et = (ht.HttpClient = function (t, n, i, e) {
            (this.ni = n),
              (this.wl = i),
              (this.R = e),
              (this.qc = function (t, n, i, e, s) {
                var o = 1e3 * this.R.httpTimeout,
                  r = null;
                s && (r = this.wl.Ic(s, o, 'HTTP timeout')), this.ni.makeRequest(t, n, i, e, o, r);
              });
          }),
          st = (ht.Logger = function (t, n, i, e, s) {
            (this.si = t),
              (this.$n = n),
              (this.p = i),
              (this.ai = e),
              (this.ri = s),
              (this.debug = function (t) {
                this.log(t, w.LogLevel.DEBUG);
              }),
              (this.info = function (t) {
                this.log(t, w.LogLevel.INFO);
              }),
              (this.warning = function (t) {
                this.log(t, w.LogLevel.WARNING);
              }),
              (this.error = function (t) {
                this.log(t, w.LogLevel.ERROR);
              }),
              (this.log = function (t, n) {
                t = this.Tl(t, n);
                this.ai.ks(t), this.p.logLevel <= n && this.si.consoleLog(t, n);
              }),
              (this.Sl = function (t) {
                return '[' + this.wn + '] ' + t;
              }),
              (this.gl = function (t) {
                return '[' + this.ri + '] ' + t;
              }),
              (this.Nl = function (t) {
                return '[Conviva] ' + t;
              }),
              (this.Ol = function (t) {
                return '[' + (this.$n.getEpochTimeMs() / 1e3).toFixed(3).toString() + '] ' + t;
              }),
              (this._l = function (t, n) {
                return '[' + st.Al(n) + '] ' + t;
              }),
              (this.Cl = function (t) {
                return this.Il && (t = 'sid=' + this.Il + ' ' + t), t;
              }),
              (this.gu = function (t) {
                this.Il = t;
              }),
              (this.setModuleName = function (t) {
                this.wn = t;
              }),
              (this.Tl = function (t, n) {
                return this.Nl(this.Ol(this._l(this.gl(this.Sl(this.Cl(t))), n)));
              });
          });
        (st.Al = function (t) {
          var n;
          switch (t) {
            case w.LogLevel.ERROR:
              n = 'ERROR';
              break;
            case w.LogLevel.WARNING:
              n = 'WARNING';
              break;
            case w.LogLevel.INFO:
              n = 'INFO';
              break;
            case w.LogLevel.DEBUG:
              n = 'DEBUG';
          }
          return n;
        }),
          (ht.Storage = function (t, n, i, e) {
            (this.ii = n),
              (this.wl = i),
              (this.R = e),
              (this.it = function (t, n) {
                n = this.wl.Ic(n, 1e3 * this.R.storageTimeout, 'storage load timeout');
                this.ii.loadData(ht.Storage.yl, t, n);
              }),
              (this.Yf = function (t, n, i) {
                i = this.wl.Ic(i, 1e3 * this.R.storageTimeout, 'storage save timeout');
                this.ii.saveData(ht.Storage.yl, t, n, i);
              });
          }),
          (ht.Storage.yl = 'Conviva');
        var ot = (ht.SystemMetadata = function (t, n, i) {
          (this.ei = n),
            (this.w = i),
            (this.ml = null),
            (this.get = function () {
              return this.ml || this.retrieve(), this.ml;
            }),
            (this.retrieve = function () {
              var t = {};
              (t[ot.BROWSER_NAME] = this.ei.getBrowserName),
                (t[ot.BROWSER_VERSION] = this.ei.getBrowserVersion),
                (t[ot.DEVICE_BRAND] = this.ei.getDeviceBrand),
                (t[ot.DEVICE_MANUFACTURER] = this.ei.getDeviceManufacturer),
                (t[ot.DEVICE_MODEL] = this.ei.getDeviceModel),
                (t[ot.DEVICE_TYPE] = this.ei.getDeviceType),
                (t[ot.DEVICE_VERSION] = this.ei.getDeviceVersion),
                (t[ot.FRAMEWORK_NAME] = this.ei.getFrameworkName),
                (t[ot.FRAMEWORK_VERSION] = this.ei.getFrameworkVersion),
                (t[ot.OPERATING_SYSTEM_NAME] = this.ei.getOperatingSystemName),
                (t[ot.OPERATING_SYSTEM_VERSION] = this.ei.getOperatingSystemVersion),
                (t[ot.DEVICE_CATEGORY] = this.ei.getDeviceCategory),
                (t[ot.SCREEN_WIDTH] = this.ei.getScreenWidth),
                (t[ot.SCREEN_HEIGHT] = this.ei.getScreenHeight),
                (t[ot.SCALE_FACTOR] = this.ei.getScaleFactor);
              var n,
                e = this;
              for (n in (0, t))
                !(function (n, i) {
                  e.w.m('Session.getSystemMetadataSchema(): ' + n, function () {
                    var t = i[n];
                    i[n] = t.call(e.ei);
                  });
                })(n, t),
                  Z.wt(t[n]) || delete t[n];
              var i = !1;
              if ('undefined' !== typeof t[ot.DEVICE_TYPE]) {
                for (var s in a.DeviceType)
                  if (t[ot.DEVICE_TYPE] === a.DeviceType[s]) {
                    i = !0;
                    break;
                  }
                i || delete t[ot.DEVICE_TYPE];
              }
              if (((i = !1), 'undefined' !== typeof t[ot.DEVICE_CATEGORY])) {
                for (var o in a.DeviceCategory)
                  if (t[ot.DEVICE_CATEGORY] === a.DeviceCategory[o]) {
                    i = !0;
                    break;
                  }
                i || delete t[ot.DEVICE_CATEGORY];
              }
              this.ml = Z.Zc(t);
            });
        });
        (ot.BROWSER_NAME = 'browserName'),
          (ot.BROWSER_VERSION = 'browserVersion'),
          (ot.DEVICE_BRAND = 'deviceBrand'),
          (ot.DEVICE_MANUFACTURER = 'deviceManufacturer'),
          (ot.DEVICE_MODEL = 'deviceModel'),
          (ot.DEVICE_TYPE = 'deviceType'),
          (ot.DEVICE_VERSION = 'deviceVersion'),
          (ot.FRAMEWORK_NAME = 'frameworkName'),
          (ot.FRAMEWORK_VERSION = 'frameworkVersion'),
          (ot.OPERATING_SYSTEM_NAME = 'operatingSystemName'),
          (ot.OPERATING_SYSTEM_VERSION = 'operatingSystemVersion'),
          (ot.DEVICE_CATEGORY = 'deviceCategory'),
          (ot.SCREEN_WIDTH = 'screenWidth'),
          (ot.SCREEN_HEIGHT = 'screenHeight'),
          (ot.SCALE_FACTOR = 'scaleFactor');
        var rt = (ht.Time = function (t, n) {
            (this.$n = t),
              (this.c = n),
              (this.current = function () {
                var t = this.$n.getEpochTimeMs();
                return Z.lt(t), t;
              });
          }),
          ut = (ht.Timer = function (t, n, i) {
            var s = this;
            (this.ti = n),
              (this.w = i),
              (this.create = function (t, n, i) {
                return this.createTimer(
                  function () {
                    s.w.m(i, function () {
                      t();
                    });
                  },
                  n,
                  i,
                );
              }),
              (this.createOnce = function (t, n, i) {
                var e = { cancel: null };
                return (
                  (e.cancel = this.createTimer(
                    function () {
                      s.w.m(i, function () {
                        e && 'function' === typeof e.cancel && (e.cancel(), (e.cancel = null), (e = null)), t();
                      });
                    },
                    n,
                    i,
                  )),
                  e.cancel
                );
              }),
              (this.createTimer = function (t, n, i) {
                return this.ti.createTimer(t, n, i);
              });
          });
      })();
    })(),
    at
  );
});
