(function(){
    var script = { "definitions": [
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C65A055B_D69B_6AE7_41EA_C07F431E1FD2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.31,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D942348A_D69B_6A61_41E7_1C5E99909BD5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 158.6,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C87C695D_C440_52B6_41D9_0B615D3518CC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C64A3567_D69B_6AAF_41E6_A465DABCAE41",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -109.29,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_C87C695D_C440_52B6_41D9_0B615D3518CC_hq.jpeg",
       "tags": [
        "oculusgo",
        "ipadpro"
       ],
       "width": 6434,
       "height": 3217
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_C87C695D_C440_52B6_41D9_0B615D3518CC_lq.jpeg",
       "tags": "preload",
       "width": 2048,
       "height": 1024
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_C87C695D_C440_52B6_41D9_0B615D3518CC.jpeg",
       "width": 4002,
       "height": 2001
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C8685FB8_C440_CDFE_41D8_650A74E43457, this.camera_D9310450_D69B_6AE1_41CD_E2A85027E3B5); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.3,
        "yaw": 65.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_C87C695D_C440_52B6_41D9_0B615D3518CC_0_HS_0_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -4.49
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.3,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_C87C695D_C440_52B6_41D9_0B615D3518CC_0_HS_0_0.png",
           "width": 202,
           "height": 204
          }
         ]
        },
        "pitch": -4.49,
        "yaw": 65.54
       }
      ],
      "id": "overlay_D226EE15_C440_CEB1_41DA_86824A8DF3F2",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     }
    ],
    "thumbnailUrl": "media/panorama_C87C695D_C440_52B6_41D9_0B615D3518CC_t.jpg"
   }
  ],
  "label": "10",
  "id": "panorama_C87C695D_C440_52B6_41D9_0B615D3518CC",
  "pitch": 0,
  "hfovMax": 130,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_C87C695D_C440_52B6_41D9_0B615D3518CC_t.jpg",
  "hfovMin": 60,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -111.25,
    "yaw": 65.54,
    "distance": 1,
    "panorama": {
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_hq.jpeg",
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "width": 6434,
          "height": 3217
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_lq.jpeg",
          "tags": "preload",
          "width": 2048,
          "height": 1024
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457.jpeg",
          "width": 4002,
          "height": 2001
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6, this.camera_C69EF4C3_D69B_6BE7_41E3_CC7BBDDE4BF7); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.18,
           "yaw": 90.13,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_0_HS_0_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -2.55
          }
         ],
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.18,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_0_HS_0_0.png",
              "width": 92,
              "height": 93
             }
            ]
           },
           "pitch": -2.55,
           "yaw": 90.13
          }
         ],
         "id": "overlay_D7BCEAEF_C440_D791_41DF_B3A50B3DDAE7",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE, this.camera_C68EE4CF_D69B_6BFF_41E2_3A19BC7093C0); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.15,
           "yaw": -74.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_0_HS_1_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -7.05
          }
         ],
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.15,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_0_HS_1_0.png",
              "width": 92,
              "height": 93
             }
            ]
           },
           "pitch": -7.05,
           "yaw": -74.87
          }
         ],
         "id": "overlay_D7D235F4_C440_7D76_41B0_3753B307A577",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C87C695D_C440_52B6_41D9_0B615D3518CC, this.camera_C6BF04DE_D69B_6BE1_41D1_FF574E9936B4); this.mainPlayList.set('selectedIndex', 9)",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.15,
           "yaw": -111.25,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_0_HS_2_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -6.23
          }
         ],
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.15,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_0_HS_2_0.png",
              "width": 92,
              "height": 93
             }
            ]
           },
           "pitch": -6.23,
           "yaw": -111.25
          }
         ],
         "id": "overlay_D7B579F9_C443_D57E_41E8_6BCAD9B16FD0",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        }
       ],
       "thumbnailUrl": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_t.jpg"
      }
     ],
     "label": "6-Lobby-CuartosVisitas",
     "id": "panorama_C8685FB8_C440_CDFE_41D8_650A74E43457",
     "pitch": 0,
     "hfovMax": 130,
     "vfov": 180,
     "thumbnailUrl": "media/panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_t.jpg",
     "hfovMin": 60,
     "class": "Panorama",
     "hfov": 360,
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 0.24,
       "yaw": 90.13,
       "distance": 1,
       "panorama": {
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_hq.jpeg",
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "width": 6434,
             "height": 3217
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_lq.jpeg",
             "tags": "preload",
             "width": 2048,
             "height": 1024
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6.jpeg",
             "width": 4002,
             "height": 2001
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_CF637991_C440_558E_41DB_21B91E5DBC9E, this.camera_D9E6F41C_D69B_6A61_41D9_D7CED9A4DC10); this.mainPlayList.set('selectedIndex', 0)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.17,
              "yaw": -92.83,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -4.94
             }
            ],
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.17,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_0_0.png",
                 "width": 92,
                 "height": 93
                }
               ]
              },
              "pitch": -4.94,
              "yaw": -92.83
             }
            ],
            "id": "overlay_CB7C04E5_C440_5396_41E2_E98B97701FEF",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE, this.camera_D916F42D_D69B_6AA3_41E9_B24EF2BBF82B); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.18,
              "yaw": -44.93,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_1_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -2.14
             }
            ],
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.18,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_1_0.png",
                 "width": 92,
                 "height": 93
                }
               ]
              },
              "pitch": -2.14,
              "yaw": -44.93
             }
            ],
            "id": "overlay_D483CC4F_C440_D291_41AE_E82512DEC042",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696, this.camera_D9F5240A_D69B_6A61_41E7_2D9884124AF9); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.17,
              "yaw": -131.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_2_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -4.43
             }
            ],
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.17,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_2_0.png",
                 "width": 92,
                 "height": 93
                }
               ]
              },
              "pitch": -4.43,
              "yaw": -131.94
             }
            ],
            "id": "overlay_CA9AAD30_C44F_D28E_41C5_8E9F1B0280C0",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C8685FB8_C440_CDFE_41D8_650A74E43457, this.camera_D9C573F8_D69B_6DA1_41D7_B62E40D29CF7); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.17,
              "yaw": 0.24,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_3_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -3.87
             }
            ],
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.17,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_3_0.png",
                 "width": 92,
                 "height": 93
                }
               ]
              },
              "pitch": -3.87,
              "yaw": 0.24
             }
            ],
            "id": "overlay_D4DE8362_C440_5692_41E5_330027B286F5",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB, this.camera_D9D563E0_D69B_6DA1_41D5_521965865559); this.mainPlayList.set('selectedIndex', 13)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.17,
              "yaw": 85.33,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_4_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -3.92
             }
            ],
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.17,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_0_HS_4_0.png",
                 "width": 92,
                 "height": 93
                }
               ]
              },
              "pitch": -3.92,
              "yaw": 85.33
             }
            ],
            "id": "overlay_D41792D4_C440_77B7_41D2_80AD08254E63",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_t.jpg"
         }
        ],
        "label": "2-AreaSocial",
        "id": "panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6",
        "pitch": 0,
        "hfovMax": 130,
        "vfov": 180,
        "thumbnailUrl": "media/panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_t.jpg",
        "hfovMin": 60,
        "class": "Panorama",
        "hfov": 360,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -2.27,
          "yaw": 85.33,
          "distance": 1,
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB_hq.jpeg",
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "width": 6434,
                "height": 3217
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB_lq.jpeg",
                "tags": "preload",
                "width": 2048,
                "height": 1024
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB.jpeg",
                "width": 4002,
                "height": 2001
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6, this.camera_D9527478_D69B_6AA1_41E7_9E7EDAFBA0C7); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.07,
                 "yaw": -2.27,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -12.37
                }
               ],
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.07,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB_0_HS_0_0.png",
                    "width": 92,
                    "height": 93
                   }
                  ]
                 },
                 "pitch": -12.37,
                 "yaw": -2.27
                }
               ],
               "id": "overlay_D414ADE7_C441_CD92_41A2_EE1828188E23",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB_t.jpg"
            }
           ],
           "label": "terraza",
           "id": "panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB",
           "pitch": 0,
           "hfovMax": 130,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB_t.jpg",
           "hfovMin": 60,
           "class": "Panorama",
           "hfov": 360,
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 85.33,
             "yaw": -2.27,
             "distance": 1,
             "panorama": "this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6"
            }
           ]
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 90.13,
          "yaw": 0.24,
          "distance": 1,
          "panorama": "this.panorama_C8685FB8_C440_CDFE_41D8_650A74E43457"
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 62.37,
          "yaw": -131.94,
          "distance": 1,
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_hq.jpeg",
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "width": 6434,
                "height": 3217
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_lq.jpeg",
                "tags": "preload",
                "width": 2048,
                "height": 1024
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696.jpeg",
                "width": 4002,
                "height": 2001
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6, this.camera_C6A9C4EB_D69B_6BA7_41E0_7AC73C4793B4); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.17,
                 "yaw": 62.37,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -5.08
                }
               ],
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.17,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_0_HS_0_0.png",
                    "width": 92,
                    "height": 93
                   }
                  ]
                 },
                 "pitch": -5.08,
                 "yaw": 62.37
                }
               ],
               "id": "overlay_D0269FB8_C440_4DFE_41DD_4FB3F9907C8A",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6, this.camera_C6D9E4F7_D69B_6BAE_41E2_2881E30A534F); this.mainPlayList.set('selectedIndex', 10)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.17,
                 "yaw": 110.86,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_0_HS_1_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -3.74
                }
               ],
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.17,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_0_HS_1_0.png",
                    "width": 92,
                    "height": 93
                   }
                  ]
                 },
                 "pitch": -3.74,
                 "yaw": 110.86
                }
               ],
               "id": "overlay_D43450E2_C440_3392_41B4_7417DEA4A9B0",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_CFA23251_C440_D6B1_41B9_2A96358E2208, this.camera_C6C89504_D69B_6A61_41E6_45BCB4671E69); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.15,
                 "yaw": 137.93,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -6.45
                }
               ],
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.15,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_0_HS_2_0.png",
                    "width": 92,
                    "height": 93
                   }
                  ]
                 },
                 "pitch": -6.45,
                 "yaw": 137.93
                }
               ],
               "id": "overlay_D59A59BC_C440_35F7_41E8_526491A35A6F",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_t.jpg"
            }
           ],
           "label": "4-SalaTV",
           "id": "panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696",
           "pitch": 0,
           "hfovMax": 130,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_t.jpg",
           "hfovMin": 60,
           "class": "Panorama",
           "hfov": 360,
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -131.94,
             "yaw": 62.37,
             "distance": 1,
             "panorama": "this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -154.58,
             "yaw": 110.86,
             "distance": 1,
             "panorama": {
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_hq.jpeg",
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "width": 6434,
                   "height": 3217
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_lq.jpeg",
                   "tags": "preload",
                   "width": 2048,
                   "height": 1024
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6.jpeg",
                   "width": 4002,
                   "height": 2001
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A, this.camera_C6EB751C_D69B_6A61_41C7_A55F924D2F24); this.mainPlayList.set('selectedIndex', 11)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.14,
                    "yaw": 98.99,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -7.59
                   }
                  ],
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.14,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_0_HS_0_0.png",
                       "width": 92,
                       "height": 93
                      }
                     ]
                    },
                    "pitch": -7.59,
                    "yaw": 98.99
                   }
                  ],
                  "id": "overlay_D4A29FB4_C440_4DF7_41D8_AC344F70B7B1",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB, this.camera_C61BC528_D69B_6AA1_41DC_4840175213BF); this.mainPlayList.set('selectedIndex', 12)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.15,
                    "yaw": -21.4,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -6.75
                   }
                  ],
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.15,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_0_HS_1_0.png",
                       "width": 92,
                       "height": 93
                      }
                     ]
                    },
                    "pitch": -6.75,
                    "yaw": -21.4
                   }
                  ],
                  "id": "overlay_D591A99A_C440_35B2_41D1_B696FF409C78",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696, this.camera_C60BB534_D69B_6AA1_41B7_87B54B7A1F5C); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.17,
                    "yaw": -154.58,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -4.59
                   }
                  ],
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.17,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_0_HS_2_0.png",
                       "width": 92,
                       "height": 93
                      }
                     ]
                    },
                    "pitch": -4.59,
                    "yaw": -154.58
                   }
                  ],
                  "id": "overlay_D14AE1B7_C440_D5F1_41B4_7801AB30379E",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_t.jpg"
               }
              ],
              "label": "11",
              "id": "panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6",
              "pitch": 0,
              "hfovMax": 130,
              "vfov": 180,
              "thumbnailUrl": "media/panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_t.jpg",
              "hfovMin": 60,
              "class": "Panorama",
              "hfov": 360,
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 81.08,
                "yaw": 98.99,
                "distance": 1,
                "panorama": {
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A_hq.jpeg",
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "width": 6434,
                      "height": 3217
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A_lq.jpeg",
                      "tags": "preload",
                      "width": 2048,
                      "height": 1024
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6, this.camera_D901243F_D69B_6A9F_41D5_6C773581B94B); this.mainPlayList.set('selectedIndex', 10)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.17,
                       "yaw": 81.08,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -5.01
                      }
                     ],
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.17,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A_0_HS_0_0.png",
                          "width": 92,
                          "height": 93
                         }
                        ]
                       },
                       "pitch": -5.01,
                       "yaw": 81.08
                      }
                     ],
                     "id": "overlay_D60FEC73_C440_3372_41E4_819ED58946E7",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A_t.jpg"
                  }
                 ],
                 "label": "12",
                 "id": "panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A",
                 "pitch": 0,
                 "hfovMax": 130,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A_t.jpg",
                 "hfovMin": 60,
                 "class": "Panorama",
                 "hfov": 360,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 98.99,
                   "yaw": 81.08,
                   "distance": 1,
                   "panorama": "this.panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6"
                  }
                 ]
                }
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 106.69,
                "yaw": -21.4,
                "distance": 1,
                "panorama": {
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB_hq.jpeg",
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "width": 6434,
                      "height": 3217
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB_lq.jpeg",
                      "tags": "preload",
                      "width": 2048,
                      "height": 1024
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6, this.camera_D942348A_D69B_6A61_41E7_1C5E99909BD5); this.mainPlayList.set('selectedIndex', 10)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.15,
                       "yaw": 106.69,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -7
                      }
                     ],
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.15,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB_0_HS_0_0.png",
                          "width": 92,
                          "height": 93
                         }
                        ]
                       },
                       "pitch": -7,
                       "yaw": 106.69
                      }
                     ],
                     "id": "overlay_D1C103BA_C440_55F3_41C9_7A002ED5203E",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB_t.jpg"
                  }
                 ],
                 "label": "13",
                 "id": "panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB",
                 "pitch": 0,
                 "hfovMax": 130,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB_t.jpg",
                 "hfovMin": 60,
                 "class": "Panorama",
                 "hfov": 360,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -21.4,
                   "yaw": 106.69,
                   "distance": 1,
                   "panorama": "this.panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6"
                  }
                 ]
                }
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 110.86,
                "yaw": -154.58,
                "distance": 1,
                "panorama": "this.panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696"
               }
              ]
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -99.49,
             "yaw": 137.93,
             "distance": 1,
             "panorama": {
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_hq.jpeg",
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "width": 6434,
                   "height": 3217
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_lq.jpeg",
                   "tags": "preload",
                   "width": 2048,
                   "height": 1024
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208.jpeg",
                   "width": 4002,
                   "height": 2001
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696, this.camera_C62AD54D_D69B_6AE3_41E8_6C76E920A643); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.17,
                    "yaw": -99.49,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -4.25
                   }
                  ],
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.17,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_0_HS_0_0.png",
                       "width": 92,
                       "height": 93
                      }
                     ]
                    },
                    "pitch": -4.25,
                    "yaw": -99.49
                   }
                  ],
                  "id": "overlay_D6FB8463_C440_7291_41DF_6BD22F7C3F11",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B, this.camera_C65A055B_D69B_6AE7_41EA_C07F431E1FD2); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.16,
                    "yaw": 102.5,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -5.92
                   }
                  ],
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.16,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_0_HS_1_0.png",
                       "width": 92,
                       "height": 93
                      }
                     ]
                    },
                    "pitch": -5.92,
                    "yaw": 102.5
                   }
                  ],
                  "id": "overlay_D746AF6C_C440_CE96_41E0_2276BB620876",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F, this.camera_C64A3567_D69B_6AAF_41E6_A465DABCAE41); this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.16,
                    "yaw": 77.92,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -5.25
                   }
                  ],
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.16,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_0_HS_2_0.png",
                       "width": 92,
                       "height": 93
                      }
                     ]
                    },
                    "pitch": -5.25,
                    "yaw": 77.92
                   }
                  ],
                  "id": "overlay_D6381549_C441_D291_41A6_1C2A92B3C002",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_t.jpg"
               }
              ],
              "label": "5-Lobby-Cuartos",
              "id": "panorama_CFA23251_C440_D6B1_41B9_2A96358E2208",
              "pitch": 0,
              "hfovMax": 130,
              "vfov": 180,
              "thumbnailUrl": "media/panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_t.jpg",
              "hfovMin": 60,
              "class": "Panorama",
              "hfov": 360,
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 137.93,
                "yaw": -99.49,
                "distance": 1,
                "panorama": "this.panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 110.69,
                "yaw": 102.5,
                "distance": 1,
                "panorama": {
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B_hq.jpeg",
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "width": 6434,
                      "height": 3217
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B_lq.jpeg",
                      "tags": "preload",
                      "width": 2048,
                      "height": 1024
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_CFA23251_C440_D6B1_41B9_2A96358E2208, this.camera_D97CF49C_D69B_6A61_41DB_49702154FCFC); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.18,
                       "yaw": 110.69,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -3.41
                      }
                     ],
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.18,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B_0_HS_0_0.png",
                          "width": 92,
                          "height": 93
                         }
                        ]
                       },
                       "pitch": -3.41,
                       "yaw": 110.69
                      }
                     ],
                     "id": "overlay_D0F37741_C441_DE8E_41B0_7F3CC27826E3",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B_t.jpg"
                  }
                 ],
                 "label": "7",
                 "id": "panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B",
                 "pitch": 0,
                 "hfovMax": 130,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B_t.jpg",
                 "hfovMin": 60,
                 "class": "Panorama",
                 "hfov": 360,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 102.5,
                   "yaw": 110.69,
                   "distance": 1,
                   "panorama": "this.panorama_CFA23251_C440_D6B1_41B9_2A96358E2208"
                  }
                 ]
                }
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 70.71,
                "yaw": 77.92,
                "distance": 1,
                "panorama": {
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F_hq.jpeg",
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "width": 6434,
                      "height": 3217
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F_lq.jpeg",
                      "tags": "preload",
                      "width": 2048,
                      "height": 1024
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_CFA23251_C440_D6B1_41B9_2A96358E2208, this.camera_D96C94AE_D69B_6BA1_41E2_9AACB5351F31); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.18,
                       "yaw": 70.71,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -3.37
                      }
                     ],
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.18,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F_0_HS_0_0.png",
                          "width": 92,
                          "height": 93
                         }
                        ]
                       },
                       "pitch": -3.37,
                       "yaw": 70.71
                      }
                     ],
                     "id": "overlay_D2508D7A_C440_CD73_41D7_57C1CF3E497E",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F_t.jpg"
                  }
                 ],
                 "label": "8",
                 "id": "panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F",
                 "pitch": 0,
                 "hfovMax": 130,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F_t.jpg",
                 "hfovMin": 60,
                 "class": "Panorama",
                 "hfov": 360,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 77.92,
                   "yaw": 70.71,
                   "distance": 1,
                   "panorama": "this.panorama_CFA23251_C440_D6B1_41B9_2A96358E2208"
                  }
                 ]
                }
               }
              ]
             }
            }
           ]
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 97.79,
          "yaw": -92.83,
          "distance": 1,
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_CF637991_C440_558E_41DB_21B91E5DBC9E_hq.jpeg",
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "width": 6434,
                "height": 3217
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_CF637991_C440_558E_41DB_21B91E5DBC9E_lq.jpeg",
                "tags": "preload",
                "width": 2048,
                "height": 1024
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_CF637991_C440_558E_41DB_21B91E5DBC9E.jpeg",
                "width": 4002,
                "height": 2001
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6, this.camera_D9209467_D69B_6AAF_41B9_E3FA8DA47B0F); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.28,
                 "yaw": 97.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_CF637991_C440_558E_41DB_21B91E5DBC9E_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -5.34
                }
               ],
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 11.28,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_CF637991_C440_558E_41DB_21B91E5DBC9E_0_HS_0_0.png",
                    "width": 202,
                    "height": 204
                   }
                  ]
                 },
                 "pitch": -5.34,
                 "yaw": 97.79
                }
               ],
               "id": "overlay_CAE6EC77_C440_3371_41DB_7279611B8D62",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_CF637991_C440_558E_41DB_21B91E5DBC9E_t.jpg"
            }
           ],
           "label": "1-Lobby",
           "id": "panorama_CF637991_C440_558E_41DB_21B91E5DBC9E",
           "pitch": 0,
           "hfovMax": 130,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_CF637991_C440_558E_41DB_21B91E5DBC9E_t.jpg",
           "hfovMin": 60,
           "class": "Panorama",
           "hfov": 360,
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -92.83,
             "yaw": 97.79,
             "distance": 1,
             "panorama": "this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6"
            }
           ]
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 59.36,
          "yaw": -44.93,
          "distance": 1,
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE_hq.jpeg",
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "width": 6434,
                "height": 3217
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE_lq.jpeg",
                "tags": "preload",
                "width": 2048,
                "height": 1024
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE.jpeg",
                "width": 4002,
                "height": 2001
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6, this.camera_C6F8D510_D69B_6A61_41DF_DF85823BFA2D); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.18,
                 "yaw": 59.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -3.07
                }
               ],
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.18,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE_0_HS_0_0.png",
                    "width": 92,
                    "height": 93
                   }
                  ]
                 },
                 "pitch": -3.07,
                 "yaw": 59.36
                }
               ],
               "id": "overlay_D1EAC6A8_C440_FF9F_41DC_E66EE6CD8B37",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE_t.jpg"
            }
           ],
           "label": "3-Cocina",
           "id": "panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE",
           "pitch": 0,
           "hfovMax": 130,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE_t.jpg",
           "hfovMin": 60,
           "class": "Panorama",
           "hfov": 360,
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -44.93,
             "yaw": 59.36,
             "distance": 1,
             "panorama": "this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6"
            }
           ]
          }
         }
        ]
       }
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 116.16,
       "yaw": -74.87,
       "distance": 1,
       "panorama": {
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE_hq.jpeg",
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "width": 6434,
             "height": 3217
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE_lq.jpeg",
             "tags": "preload",
             "width": 2048,
             "height": 1024
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE.jpeg",
             "width": 4002,
             "height": 2001
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C8685FB8_C440_CDFE_41D8_650A74E43457, this.camera_C63A9540_D69B_6AE1_41D2_5C17E214825A); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.31,
              "yaw": 116.16,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -3.73
             }
            ],
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.31,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE_0_HS_0_0.png",
                 "width": 202,
                 "height": 204
                }
               ]
              },
              "pitch": -3.73,
              "yaw": 116.16
             }
            ],
            "id": "overlay_D2B8F5A3_C440_7D92_41DC_D1066BFA5748",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE_t.jpg"
         }
        ],
        "label": "9",
        "id": "panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE",
        "pitch": 0,
        "hfovMax": 130,
        "vfov": 180,
        "thumbnailUrl": "media/panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE_t.jpg",
        "hfovMin": 60,
        "class": "Panorama",
        "hfov": 360,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -74.87,
          "yaw": 116.16,
          "distance": 1,
          "panorama": "this.panorama_C8685FB8_C440_CDFE_41D8_650A74E43457"
         }
        ]
       }
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 65.54,
       "yaw": -111.25,
       "distance": 1,
       "panorama": "this.panorama_C87C695D_C440_52B6_41D9_0B615D3518CC"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D901243F_D69B_6A9F_41D5_6C773581B94B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -81.01,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C62AD54D_D69B_6AE3_41E8_6C76E920A643",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -42.07,
   "pitch": 0
  }
 },
 "this.panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F",
 "this.panorama_CF637991_C440_558E_41DB_21B91E5DBC9E",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C68EE4CF_D69B_6BFF_41E2_3A19BC7093C0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -63.84,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C6C89504_D69B_6A61_41E6_45BCB4671E69",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 80.51,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D916F42D_D69B_6AA3_41E9_B24EF2BBF82B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -120.64,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D9E6F41C_D69B_6A61_41D9_D7CED9A4DC10",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.21,
   "pitch": 0
  }
 },
 "this.panorama_C8685FB8_C440_CDFE_41D8_650A74E43457",
 "this.panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C6D9E4F7_D69B_6BAE_41E2_2881E30A534F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.42,
   "pitch": 0
  }
 },
 "this.panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B",
 "this.panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6",
 "this.panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_CF637991_C440_558E_41DB_21B91E5DBC9E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 105.48,
   "pitch": -7.43
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A",
 {
  "class": "FadeInEffect",
  "duration": 500,
  "id": "FadeInEffect_D9AB43B8_D69B_6DA1_41D1_612FB646B5B0",
  "easing": "cubic_in"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C6A9C4EB_D69B_6BA7_41E0_7AC73C4793B4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 48.06,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D9D563E0_D69B_6DA1_41D5_521965865559",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.73,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D97CF49C_D69B_6A61_41DB_49702154FCFC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -77.5,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 500,
  "id": "FadeOutEffect_D9AB53B8_D69B_6DA1_41E2_BF6D7500760F",
  "easing": "cubic_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C6BF04DE_D69B_6BE1_41D1_FF574E9936B4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -114.46,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C6F8D510_D69B_6A61_41DF_DF85823BFA2D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 135.07,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D96C94AE_D69B_6BA1_41E2_9AACB5351F31",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.08,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D9C573F8_D69B_6DA1_41D7_B62E40D29CF7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.87,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C69EF4C3_D69B_6BE7_41E3_CC7BBDDE4BF7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.76,
   "pitch": 0
  }
 },
 "this.panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB",
 "this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D9527478_D69B_6AA1_41E7_9E7EDAFBA0C7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.67,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C60BB534_D69B_6AA1_41B7_87B54B7A1F5C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.14,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C61BC528_D69B_6AA1_41DC_4840175213BF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -73.31,
   "pitch": 0
  }
 },
 "this.panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C6EB751C_D69B_6A61_41C7_A55F924D2F24",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.92,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_D9AB33B8_D69B_6DA1_41E0_69516945935D",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/zoomImage_DA52F999_D698_9A63_41E0_303986B4D02C_0_0.jpg",
    "width": 1912,
    "height": 1076
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/zoomImage_DA52F999_D698_9A63_41E0_303986B4D02C_0_1.jpg",
    "width": 1023,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/zoomImage_DA52F999_D698_9A63_41E0_303986B4D02C_0_2.jpg",
    "width": 511,
    "height": 288
   }
  ]
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_CF637991_C440_558E_41DB_21B91E5DBC9E",
    "camera": "this.panorama_CF637991_C440_558E_41DB_21B91E5DBC9E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": {
     "class": "PanoramaPlayer",
     "gyroscopeVerticalDraggingEnabled": true,
     "mouseControlMode": "drag_acceleration",
     "displayPlaybackBar": true,
     "id": "MainViewerPanoramaPlayer",
     "viewerArea": "this.MainViewer",
     "touchControlMode": "drag_rotation"
    }
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ],
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     }
    },
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE",
    "camera": "this.panorama_C86BF5B3_C440_DDF2_41D5_086B39290ADE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696",
    "camera": "this.panorama_C8598456_C440_F2B3_41E2_1B2F35BCE696_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_CFA23251_C440_D6B1_41B9_2A96358E2208",
    "camera": "this.panorama_CFA23251_C440_D6B1_41B9_2A96358E2208_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C8685FB8_C440_CDFE_41D8_650A74E43457",
    "camera": "this.panorama_C8685FB8_C440_CDFE_41D8_650A74E43457_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B",
    "camera": "this.panorama_CF89AD26_C440_3293_41D0_6BFD07E0B03B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F",
    "camera": "this.panorama_CF9ABBB7_C440_55F1_41B3_00BCA612175F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ],
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     }
    },
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C87C695D_C440_52B6_41D9_0B615D3518CC",
    "camera": "this.panorama_C87C695D_C440_52B6_41D9_0B615D3518CC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6",
    "camera": "this.panorama_C87CC7C1_C440_3D8E_41DE_B8D1FCC823B6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A",
    "camera": "this.panorama_C87315D1_C443_DDB1_41E8_66EBB4E3D65A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB",
    "camera": "this.panorama_C807B4D9_C443_F3B1_41CC_C0FEF5A963BB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ],
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     }
    }
   }
  ],
  "id": "mainPlayList"
 },
 "this.panorama_CFFBB2FD_C443_D771_41BE_E6895F67D4FB_camera",
 "this.panorama_C85457D7_C440_3DB2_41E1_977685D9CBB6_camera",
 "this.MainViewerPanoramaPlayer",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D9209467_D69B_6AAF_41B9_E3FA8DA47B0F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.17,
   "pitch": 0
  }
 },
 "this.panorama_C86699ED_C440_7596_41DF_9FFBE9EA73CE_camera",
 "this.panorama_CFA23251_C440_D6B1_41B9_2A96358E2208",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D9F5240A_D69B_6A61_41E7_2D9884124AF9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -117.63,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D9310450_D69B_6AE1_41CD_E2A85027E3B5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 68.75,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C63A9540_D69B_6AE1_41D2_5C17E214825A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 105.13,
   "pitch": 0
  }
 }
], "children": [
 {
  "paddingBottom": 0,
  "toolTipFontSize": "1.11vh",
  "toolTipBackgroundColor": "#F6F6F6",
  "id": "MainViewer",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "width": "100%",
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "minHeight": 50,
  "toolTipOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minWidth": 100,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "height": "100%",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderSize": 0,
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "propagateClick": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "transitionDuration": 500,
  "class": "ViewerArea",
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "paddingLeft": 0,
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "shadow": false,
  "toolTipFontColor": "#606060",
  "displayTooltipInTouchScreens": true,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingTop": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipPaddingTop": 4,
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBottom": 0,
  "progressHeight": 10,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "id": "IconButton_DFF846A0_CA8F_5E3C_41AA_9E2F1F05FF49",
    "width": 75,
    "paddingLeft": 0,
    "transparencyActive": true,
    "shadow": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minHeight": 0,
    "verticalAlign": "middle",
    "pressedIconURL": "skin/IconButton_DFF846A0_CA8F_5E3C_41AA_9E2F1F05FF49_pressed.png",
    "height": 75,
    "minWidth": 0,
    "mode": "toggle",
    "click": "this.showPopupImage(this.ImageResource_D9AB33B8_D69B_6DA1_41E0_69516945935D, null, '97%', '97%', this.FadeInEffect_D9AB43B8_D69B_6DA1_41D1_612FB646B5B0, this.FadeOutEffect_D9AB53B8_D69B_6DA1_41E2_BF6D7500760F, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, null, null, false)",
    "paddingTop": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "iconURL": "skin/IconButton_DFF846A0_CA8F_5E3C_41AA_9E2F1F05FF49.png",
    "propagateClick": false,
    "data": {
     "name": "Button37509"
    },
    "class": "IconButton",
    "cursor": "hand",
    "paddingBottom": 0
   }
  ],
  "id": "Container_DFFB96A0_CA8F_5E3C_41DB_40B774614F12",
  "left": "0%",
  "width": "100%",
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "shadow": false,
  "borderRadius": 0,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "minHeight": 20,
  "scrollBarOpacity": 0.5,
  "bottom": "0.1%",
  "height": "14.769%",
  "verticalAlign": "middle",
  "minWidth": 20,
  "overflow": "hidden",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "borderSize": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container37498"
  },
  "gap": 4,
  "class": "Container",
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "id": "veilPopupPanorama",
  "left": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0.55,
  "right": 0,
  "shadow": false,
  "borderRadius": 0,
  "minHeight": 0,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "bottom": 0,
  "backgroundColor": [
   "#000000"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "minWidth": 0,
  "paddingTop": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "propagateClick": false,
  "data": {
   "name": "UIComponent2544"
  },
  "class": "UIComponent",
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [],
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "shadow": false,
  "borderRadius": 0,
  "minHeight": 0,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "bottom": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "paddingTop": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "propagateClick": false,
  "data": {
   "name": "ZoomImage2545"
  },
  "class": "ZoomImage",
  "visible": false,
  "scaleMode": "custom",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "pressedIconColor": "#888888",
  "paddingLeft": 5,
  "backgroundOpacity": 0.3,
  "fontSize": "1.29vh",
  "right": 10,
  "shadow": false,
  "shadowSpread": 1,
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "top": 10,
  "borderColor": "#000000",
  "shadowColor": "#000000",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "rollOverIconColor": "#666666",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "minWidth": 0,
  "mode": "push",
  "label": "",
  "paddingTop": 5,
  "gap": 5,
  "paddingRight": 5,
  "iconColor": "#000000",
  "borderSize": 0,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "iconBeforeLabel": true,
  "iconLineWidth": 5,
  "propagateClick": false,
  "data": {
   "name": "CloseButton2546"
  },
  "iconWidth": 20,
  "fontColor": "#FFFFFF",
  "class": "CloseButton",
  "visible": false,
  "fontWeight": "normal",
  "textDecoration": "none",
  "iconHeight": 20,
  "cursor": "hand",
  "paddingBottom": 5
 }
], 
 "start": "this.init(); this.mainPlayList.set('selectedIndex', 0)",
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 20,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "height": "100%",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "borderSize": 0,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "horizontalAlign": "left",
 "contentOpaque": false,
 "propagateClick": false,
 "data": {
  "name": "Player460"
 },
 "mouseWheelEnabled": true,
 "gap": 10,
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
