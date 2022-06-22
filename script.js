(function(){
    var script = { "definitions": [
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9FD2E74C_8C4D_56EE_41D6_B2ABC00A09BD",
  "initialPosition": {
   "yaw": 82.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_hq.jpeg",
       "width": 6434,
       "tags": [
        "oculusgo",
        "ipadpro"
       ],
       "class": "ImageResourceLevel",
       "height": 3217
      },
      {
       "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_lq.jpeg",
       "width": 2048,
       "tags": "preload",
       "class": "ImageResourceLevel",
       "height": 1024
      },
      {
       "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7.jpeg",
       "width": 4002,
       "class": "ImageResourceLevel",
       "height": 2001
      }
     ]
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_0_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "hfov": 8.66,
        "yaw": 16.43,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.87
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE, this.camera_9954B6F2_8C4D_57BA_41AE_59579696C3AE); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.66,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_0_0.png",
           "width": 157,
           "class": "ImageResourceLevel",
           "height": 157
          }
         ]
        },
        "pitch": -9.87,
        "yaw": 16.43
       }
      ],
      "id": "overlay_9C50A487_8C4D_6A5A_41C7_E7DFEA140B5B",
      "data": {
       "label": "Image"
      }
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_1_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "hfov": 6.58,
        "yaw": 86.89,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.81
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E, this.camera_9F24A72D_8C4D_56AE_41C5_D608B93517CD); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.58,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_1_0.png",
           "width": 117,
           "class": "ImageResourceLevel",
           "height": 117
          }
         ]
        },
        "pitch": -2.81,
        "yaw": 86.89
       }
      ],
      "id": "overlay_9CF1CD27_8C4D_7A5A_41DC_63373282E4CE",
      "data": {
       "label": "Image"
      }
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_2_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "hfov": 6.56,
        "yaw": 79.16,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.26
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0, this.camera_9F3A4723_8C4D_565A_41D0_0583113C8A4E); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.56,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_2_0.png",
           "width": 117,
           "class": "ImageResourceLevel",
           "height": 117
          }
         ]
        },
        "pitch": -5.26,
        "yaw": 79.16
       }
      ],
      "id": "overlay_9D2B5638_8C4D_76B6_41E0_FDE8E883AE22",
      "data": {
       "label": "Image"
      }
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_3_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "hfov": 6.57,
        "yaw": 97.59,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.86
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB, this.camera_995E16FC_8C4D_57AE_41B3_9865CFC209FB); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.57,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_3_0.png",
           "width": 117,
           "class": "ImageResourceLevel",
           "height": 117
          }
         ]
        },
        "pitch": -4.86,
        "yaw": 97.59
       }
      ],
      "id": "overlay_9D370F8E_8C45_566A_41DD_0F108EC29BAD",
      "data": {
       "label": "Image"
      }
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_4_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "hfov": 6.58,
        "yaw": -90.09,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.76
       }
      ],
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.58,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_0_HS_4_0.png",
           "width": 117,
           "class": "ImageResourceLevel",
           "height": 117
          }
         ]
        },
        "pitch": -3.76,
        "yaw": -90.09
       }
      ],
      "id": "overlay_9DC2A334_8C47_EEBE_41BD_3DB352C186B4",
      "data": {
       "label": "Image"
      }
     }
    ],
    "thumbnailUrl": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "label": "dinning",
  "id": "panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7",
  "pitch": 0,
  "hfovMax": 130,
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_hq.jpeg",
          "width": 6434,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "class": "ImageResourceLevel",
          "height": 3217
         },
         {
          "url": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_lq.jpeg",
          "width": 2048,
          "tags": "preload",
          "class": "ImageResourceLevel",
          "height": 1024
         },
         {
          "url": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 2001
         }
        ]
       },
       "overlays": [
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_0_HS_0_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "hfov": 8.76,
           "yaw": 159.78,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -4.26
          }
         ],
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798, this.camera_9F28B742_8C4D_56DA_41C4_A968B3651C8D); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.76,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_0_HS_0_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -4.26,
           "yaw": 159.78
          }
         ],
         "id": "overlay_8332E0B9_8C45_2BB6_41BF_4DB38E1CF394",
         "data": {
          "label": "Image"
         }
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_0_HS_1_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "hfov": 8.74,
           "yaw": 61.27,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -6.28
          }
         ],
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7, this.camera_9FDA9757_8C4D_56FA_41C1_385310B1AA99); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.74,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_0_HS_1_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -6.28,
           "yaw": 61.27
          }
         ],
         "id": "overlay_9C002418_8C43_2A76_41D0_82605F2DDD11",
         "data": {
          "label": "Image"
         }
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_0_HS_2_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "hfov": 8.76,
           "yaw": -20.47,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -4.65
          }
         ],
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0, this.camera_9FD2E74C_8C4D_56EE_41D6_B2ABC00A09BD); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.76,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_0_HS_2_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -4.65,
           "yaw": -20.47
          }
         ],
         "id": "overlay_83BD0A67_8C43_5EDA_41BA_130F835F10B9",
         "data": {
          "label": "Image"
         }
        }
       ],
       "thumbnailUrl": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_t.jpg",
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama",
     "label": "pool",
     "id": "panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE",
     "pitch": 0,
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798_hq.jpeg",
             "width": 6434,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "height": 3217
            },
            {
             "url": "media/panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798_lq.jpeg",
             "width": 2048,
             "tags": "preload",
             "class": "ImageResourceLevel",
             "height": 1024
            },
            {
             "url": "media/panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798.jpeg",
             "width": 4002,
             "class": "ImageResourceLevel",
             "height": 2001
            }
           ]
          },
          "overlays": [
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "hfov": 8.79,
              "yaw": 85.6,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 0.41
             }
            ],
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE, this.camera_98AAF6E7_8C4D_57DA_41E1_0342820737E6); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.79,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798_0_HS_0_0.png",
                 "width": 157,
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": 0.41,
              "yaw": 85.6
             }
            ],
            "id": "overlay_81A0E5E1_8C43_35D6_41CA_7EA73F890C0C",
            "data": {
             "label": "Image"
            }
           }
          ],
          "thumbnailUrl": "media/panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798_t.jpg",
          "class": "SphericPanoramaFrame"
         }
        ],
        "class": "Panorama",
        "label": "Start",
        "id": "panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798",
        "pitch": 0,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE",
          "backwardYaw": 159.78,
          "yaw": 85.6,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "hfovMin": 80,
        "vfov": 180,
        "partial": false,
        "thumbnailUrl": "media/panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798_t.jpg",
        "hfov": 360
       },
       "backwardYaw": 85.6,
       "yaw": 159.78,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": {
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_hq.jpeg",
             "width": 6434,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "height": 3217
            },
            {
             "url": "media/panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_lq.jpeg",
             "width": 2048,
             "tags": "preload",
             "class": "ImageResourceLevel",
             "height": 1024
            },
            {
             "url": "media/panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0.jpeg",
             "width": 4002,
             "class": "ImageResourceLevel",
             "height": 2001
            }
           ]
          },
          "overlays": [
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "hfov": 8.64,
              "yaw": -97.08,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -10.66
             }
            ],
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE, this.camera_9FC0B761_8C4D_56D7_41D9_4455E6DAE5EE); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.64,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_0_HS_0_0.png",
                 "width": 157,
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": -10.66,
              "yaw": -97.08
             }
            ],
            "id": "overlay_9CAC3F10_8C4F_F676_41DE_CA65DC183DA4",
            "data": {
             "label": "Image"
            }
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_0_HS_1_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "hfov": 8.65,
              "yaw": 178.3,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -10.13
             }
            ],
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7, this.camera_9FF7E76C_8C4D_56AD_419E_58049646877C); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.65,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_0_HS_1_0.png",
                 "width": 157,
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": -10.13,
              "yaw": 178.3
             }
            ],
            "id": "overlay_9CB627CD_8C4D_35EE_41D4_12FDC88BF129",
            "data": {
             "label": "Image"
            }
           }
          ],
          "thumbnailUrl": "media/panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_t.jpg",
          "class": "SphericPanoramaFrame"
         }
        ],
        "class": "Panorama",
        "label": "CuartoVisitas",
        "id": "panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0",
        "pitch": 0,
        "hfovMax": 130,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE",
          "backwardYaw": -20.47,
          "yaw": -97.08,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7",
          "backwardYaw": 79.16,
          "yaw": 178.3,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "partial": false,
        "vfov": 180,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_t.jpg",
        "hfov": 360
       },
       "backwardYaw": -97.08,
       "yaw": -20.47,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7",
       "backwardYaw": 16.43,
       "yaw": 61.27,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "partial": false,
     "vfov": 180,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_t.jpg",
     "hfov": 360
    },
    "backwardYaw": 61.27,
    "yaw": 16.43,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798"
   },
   {
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB_hq.jpeg",
          "width": 6434,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "class": "ImageResourceLevel",
          "height": 3217
         },
         {
          "url": "media/panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB_lq.jpeg",
          "width": 2048,
          "tags": "preload",
          "class": "ImageResourceLevel",
          "height": 1024
         },
         {
          "url": "media/panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 2001
         }
        ]
       },
       "overlays": [
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB_0_HS_0_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "hfov": 8.67,
           "yaw": -48.61,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -9.33
          }
         ],
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7, this.camera_9FFCE776_8C4D_56BD_41C8_1AAACFEFA721); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.67,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB_0_HS_0_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -9.33,
           "yaw": -48.61
          }
         ],
         "id": "overlay_9DE7CDDA_8C44_F5EA_41DD_510E5BCFE0D8",
         "data": {
          "label": "Image"
         }
        }
       ],
       "thumbnailUrl": "media/panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB_t.jpg",
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama",
     "label": "secondary bedroom",
     "id": "panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB",
     "pitch": 0,
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7",
       "backwardYaw": 97.59,
       "yaw": -48.61,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "partial": false,
     "vfov": 180,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB_t.jpg",
     "hfov": 360
    },
    "backwardYaw": -48.61,
    "yaw": 97.59,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0",
    "backwardYaw": 178.3,
    "yaw": 79.16,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E_hq.jpeg",
          "width": 6434,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "class": "ImageResourceLevel",
          "height": 3217
         },
         {
          "url": "media/panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E_lq.jpeg",
          "width": 2048,
          "tags": "preload",
          "class": "ImageResourceLevel",
          "height": 1024
         },
         {
          "url": "media/panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 2001
         }
        ]
       },
       "overlays": [
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E_0_HS_0_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "hfov": 8.79,
           "yaw": 103.24,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -1.6
          }
         ],
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7, this.camera_9F20E737_8C4D_56BA_41C8_C6997D8C0308); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.79,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E_0_HS_0_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -1.6,
           "yaw": 103.24
          }
         ],
         "id": "overlay_9D0AA1C3_8C43_6DDA_41C6_648D59FCA9CE",
         "data": {
          "label": "Image"
         }
        }
       ],
       "thumbnailUrl": "media/panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E_t.jpg",
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama",
     "label": "master-bedroom",
     "id": "panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E",
     "pitch": 0,
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7",
       "backwardYaw": 86.89,
       "yaw": 103.24,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "partial": false,
     "vfov": 180,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E_t.jpg",
     "hfov": 360
    },
    "backwardYaw": 103.24,
    "yaw": 86.89,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_t.jpg",
  "hfov": 360
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_995E16FC_8C4D_57AE_41B3_9865CFC209FB",
  "initialPosition": {
   "yaw": 131.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 500,
  "id": "FadeOutEffect_9E99D32C_8C4F_2EAE_41C5_832D8110A2E1",
  "class": "FadeOutEffect",
  "easing": "cubic_out"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9FFCE776_8C4D_56BD_41C8_1AAACFEFA721",
  "initialPosition": {
   "yaw": -82.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "media": {
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "class": "Map",
     "minimumZoomFactor": 0.5,
     "label": "floorplan",
     "fieldOfViewOverlayRadiusScale": 0.3,
     "thumbnailUrl": "media/map_9F1302B4_8C4D_6FBE_41C1_F7AD80586081_t.png",
     "width": 1920,
     "maximumZoomFactor": 1.2,
     "id": "map_9F1302B4_8C4D_6FBE_41C1_F7AD80586081",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_9F1302B4_8C4D_6FBE_41C1_F7AD80586081.png",
        "width": 1600,
        "class": "ImageResourceLevel",
        "height": 900
       },
       {
        "url": "media/map_9F1302B4_8C4D_6FBE_41C1_F7AD80586081_lq.png",
        "width": 682,
        "tags": "preload",
        "class": "ImageResourceLevel",
        "height": 384
       }
      ]
     },
     "initialZoomFactor": 1,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "scaleMode": "fit_inside",
     "height": 1080
    },
    "player": {
     "movementMode": "constrained",
     "id": "MainViewerMapPlayer",
     "class": "MapPlayer",
     "viewerArea": "this.MainViewer"
    },
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_98A426D7_8C4D_57FA_41DB_CAA8329F2D51",
  "class": "PlayList"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.map_9F1302B4_8C4D_6FBE_41C1_F7AD80586081",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9954B6F2_8C4D_57BA_41AE_59579696C3AE",
  "initialPosition": {
   "yaw": -118.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9F20E737_8C4D_56BA_41C8_C6997D8C0308",
  "initialPosition": {
   "yaw": -93.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "media": "this.map_9F1302B4_8C4D_6FBE_41C1_F7AD80586081",
    "player": "this.MainViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_98A476D7_8C4D_57FA_41B9_038C7FAF665A",
  "class": "PlayList"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_98AAF6E7_8C4D_57DA_41E1_0342820737E6",
  "initialPosition": {
   "yaw": -20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": {
     "displayPlaybackBar": true,
     "mouseControlMode": "drag_acceleration",
     "class": "PanoramaPlayer",
     "touchControlMode": "drag_rotation",
     "id": "MainViewerPanoramaPlayer",
     "gyroscopeVerticalDraggingEnabled": true,
     "viewerArea": "this.MainViewer"
    },
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false,
      "movements": [
       {
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in"
       },
       {
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear"
       },
       {
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out"
       }
      ]
     },
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798_camera",
     "initialPosition": {
      "hfov": 100,
      "yaw": 79.33,
      "class": "PanoramaCameraPosition",
      "pitch": -9.83
     }
    }
   },
   {
    "media": "this.panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE_camera"
   },
   {
    "media": "this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_85DF59C0_8C3C_FDD6_41DA_67111C9062C7_camera"
   },
   {
    "media": "this.panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0_camera"
   },
   {
    "media": "this.panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false,
      "movements": [
       {
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in"
       },
       {
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear"
       },
       {
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out"
       }
      ]
     },
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    }
   },
   {
    "media": "this.panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E_camera"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9FDA9757_8C4D_56FA_41C1_385310B1AA99",
  "initialPosition": {
   "yaw": -163.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_85CC69E8_8C3F_3DD6_41E1_583FC2944CAE",
 "this.panorama_86A39D25_8C3D_3A5E_41BE_329A07666AD0",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9FC0B761_8C4D_56D7_41D9_4455E6DAE5EE",
  "initialPosition": {
   "yaw": 159.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9F3A4723_8C4D_565A_41D0_0583113C8A4E",
  "initialPosition": {
   "yaw": -1.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.MainViewerPanoramaPlayer",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9FF7E76C_8C4D_56AD_419E_58049646877C",
  "initialPosition": {
   "yaw": -100.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9F28B742_8C4D_56DA_41C4_A968B3651C8D",
  "initialPosition": {
   "hfov": 100,
   "yaw": -94.4,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9F24A72D_8C4D_56AE_41C5_D608B93517CD",
  "initialPosition": {
   "yaw": -76.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 500,
  "id": "FadeInEffect_9E99C32C_8C4F_2EAE_41D5_99CE12FD079D",
  "class": "FadeInEffect",
  "easing": "cubic_in"
 },
 "this.panorama_85C65A34_8C3F_5EBE_41DF_C06AB35A30AB_camera",
 "this.panorama_85C96920_8C3C_DA56_41BC_EA80387BF88E",
 "this.MainViewerMapPlayer",
 "this.panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798",
 {
  "id": "ImageResource_9E99332C_8C4F_2EAE_41DD_F276BE9671D3",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/zoomImage_9E7E7488_8C4F_6A56_419F_3015A7C657D0_0_0.png",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   },
   {
    "url": "media/zoomImage_9E7E7488_8C4F_6A56_419F_3015A7C657D0_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   },
   {
    "url": "media/zoomImage_9E7E7488_8C4F_6A56_419F_3015A7C657D0_0_2.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 288
   }
  ]
 },
 "this.panorama_85D07A74_8C3F_7EBE_41D8_7A916696B798_camera"
], "children": [
 {
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "id": "MainViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontSize": "1.11vh",
  "progressHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "borderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarOpacity": 1,
  "minWidth": 100,
  "toolTipOpacity": 1,
  "paddingRight": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipFontStyle": "normal",
  "progressLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarHeadWidth": 6,
  "progressBorderSize": 0,
  "playbackBarBorderSize": 0,
  "propagateClick": false,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingBottom": 4,
  "transitionMode": "blending",
  "shadow": false,
  "playbackBarRight": 0,
  "progressBorderRadius": 0,
  "playbackBarLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "displayTooltipInTouchScreens": true,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontColor": "#606060",
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "progressBarBorderColor": "#000000",
  "class": "ViewerArea",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "toolTipShadowSpread": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "paddingBottom": 0,
  "borderSize": 0,
  "progressOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0
 },
 {
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "verticalAlign": "middle",
    "id": "IconButton_DFF846A0_CA8F_5E3C_41AA_9E2F1F05FF49",
    "transparencyActive": true,
    "shadow": false,
    "width": 75,
    "backgroundOpacity": 0,
    "minHeight": 0,
    "borderRadius": 0,
    "pressedIconURL": "skin/IconButton_DFF846A0_CA8F_5E3C_41AA_9E2F1F05FF49_pressed.png",
    "minWidth": 0,
    "paddingTop": 0,
    "class": "IconButton",
    "paddingRight": 0,
    "mode": "toggle",
    "height": 75,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "click": "this.showPopupImage(this.ImageResource_9E99332C_8C4F_2EAE_41DD_F276BE9671D3, null, '90%', '90%', this.FadeInEffect_9E99C32C_8C4F_2EAE_41D5_99CE12FD079D, this.FadeOutEffect_9E99D32C_8C4F_2EAE_41C5_832D8110A2E1, {'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','rollOverIconLineWidth':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingLeft':5,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconWidth':50,'pressedIconHeight':50,'iconHeight':50,'borderColor':'#000000','pressedBorderSize':0,'rollOverIconHeight':50,'iconLineWidth':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, null, null, false)",
    "iconURL": "skin/IconButton_DFF846A0_CA8F_5E3C_41AA_9E2F1F05FF49.png",
    "data": {
     "name": "Button37509"
    },
    "propagateClick": false,
    "paddingBottom": 0,
    "borderSize": 0,
    "cursor": "hand"
   }
  ],
  "id": "Container_DFFB96A0_CA8F_5E3C_41DB_40B774614F12",
  "left": "0%",
  "shadow": false,
  "verticalAlign": "middle",
  "width": "100%",
  "backgroundOpacity": 0,
  "minHeight": 20,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "bottom": "0.1%",
  "minWidth": 20,
  "overflow": "hidden",
  "class": "Container",
  "paddingRight": 0,
  "paddingTop": 0,
  "height": "14.769%",
  "paddingLeft": 0,
  "gap": 4,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "layout": "horizontal",
  "horizontalAlign": "center",
  "data": {
   "name": "Container37498"
  },
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0
 },
 {
  "id": "veilPopupPanorama",
  "left": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0
  ],
  "right": 0,
  "backgroundOpacity": 0.55,
  "minHeight": 0,
  "borderRadius": 0,
  "top": 0,
  "bottom": 0,
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "paddingTop": 0,
  "class": "UIComponent",
  "paddingRight": 0,
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "visible": false,
  "data": {
   "name": "UIComponent18589"
  },
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0
 },
 {
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "shadow": false,
  "backgroundColorRatios": [],
  "right": 0,
  "backgroundOpacity": 1,
  "minHeight": 0,
  "borderRadius": 0,
  "top": 0,
  "bottom": 0,
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "paddingTop": 0,
  "class": "ZoomImage",
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingLeft": 0,
  "visible": false,
  "scaleMode": "custom",
  "data": {
   "name": "ZoomImage18590"
  },
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0
 },
 {
  "textDecoration": "none",
  "fontFamily": "Arial",
  "verticalAlign": "middle",
  "data": {
   "name": "CloseButton18591"
  },
  "id": "closeButtonPopupPanorama",
  "shadow": false,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "right": 10,
  "backgroundOpacity": 0.3,
  "pressedIconColor": "#888888",
  "minHeight": 0,
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "top": 10,
  "borderColor": "#000000",
  "shadowSpread": 1,
  "shadowColor": "#000000",
  "paddingTop": 5,
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "class": "CloseButton",
  "paddingRight": 5,
  "mode": "push",
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconBeforeLabel": true,
  "paddingLeft": 5,
  "rollOverIconColor": "#666666",
  "horizontalAlign": "center",
  "label": "",
  "fontStyle": "normal",
  "layout": "horizontal",
  "iconColor": "#000000",
  "fontColor": "#FFFFFF",
  "iconWidth": 20,
  "gap": 5,
  "fontSize": "1.29vh",
  "visible": false,
  "iconHeight": 20,
  "propagateClick": false,
  "iconLineWidth": 5,
  "paddingBottom": 5,
  "borderSize": 0,
  "cursor": "hand",
  "fontWeight": "normal"
 }
], 
 "start": "this.init(); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "shadow": false,
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; }
 },
 "paddingTop": 0,
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "overflow": "visible",
 "class": "Player",
 "paddingRight": 0,
 "paddingLeft": 0,
 "gap": 10,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "layout": "absolute",
 "width": "100%",
 "height": "100%",
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "data": {
  "name": "Player460"
 },
 "propagateClick": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "mobileMipmappingEnabled": false
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
