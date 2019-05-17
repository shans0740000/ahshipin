/********* dhshipin.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface dhshipin : CDVPlugin {
  // Member variables go here.
}

- (void)coolMethod:(CDVInvokedUrlCommand*)command;
- (void)test:(CDVInvokedUrlCommand*)command;

@end

@implementation dhshipin
- (void)test:(CDVInvokedUrlCommand*)command
{
    NSLog(@"test001001003000405050");
}
- (void)coolMethod:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];

    if (echo != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
