# react-native-app

Yarn was not installed, so I installed it via
$brew install yarn

installed react native app with
$ yarn global add react-native-cli
and
$ react-native init <appName>

make sure you are in the right folder "firstApp" when you run "$ react-native run-ios" so that the app starts

Had to set the XCode preference to use the right command line path and then it worked, it is unpacking and checking tons of stuff though right now and takes a couple minutes to set everything up.

Note:
Whenever something seems to go awry, I recommend killing all current processes and using the command $ npm start -- --reset-cache because that seems to fix my problem 99% of the time.
