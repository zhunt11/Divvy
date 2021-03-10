//
//  RCTChartModule.m
//  BusinessIntelligence
//
//  Created by zacharyhunt on 3/9/21.
//

#import "RCTChartModule.h"
#import <React/RCTLog.h>

@implementation RCTChartModule

RCT_EXPORT_METHOD(callMe:(NSString *)value) {
  RCTLogInfo(@"Call me %@", value);
  NSLog(@"Fuck");
}

RCT_EXPORT_MODULE();

@end
