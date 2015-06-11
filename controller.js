flashStr = ' Everything freezes. The sweet, icky chord hangs in the air... there is no way to be at ease with it. If you try the "Are you quite finished, Superintendent?" gambit, the man will answer, "No, as a matter of fact... no, you nasty little wet-mouthed prig, I\'m not half finished, not with you..." So it\'s good policy always to have the toilet valve cracked a bit, to maintain some flow through the toilet so when it stops you\'ll have that extra minute or two. Which is not the usual paranoia of waiting for a knock, or a phone to ring: no, it takes a particular kind of mental illness to sit and listen for a cessation of noise. But- Imagine this very elaborate scientific lie: that sound cannot travel through outer space. Well, but suppose it can. Suppose They don\'t want us to know there is a medium there, what used to be called an "aether," which can carry sound to every part of the Earth. The Soniferous Aether. For millions of years, the sun has been roaring, a giant, furnace, 93 millionmile roar, so perfectly steady that generations of men have been born into it and passed out of it again, without ever hearing it. Unless it changed, how would anybody know? Except that at night now and then, in some part of the dark hemisphere, because of eddies in the Soniferous Aether, there will come to pass a very shallow pocket of no-sound. For a few seconds, in a particular place, nearly every night somewhere in the World, sound-energy from Outside is shut off. The roaring of the sun stops. For its brief life, the point of sound-shadow may come to rest a thousand feet above a desert, between floors in an empty office building, or exactly around a seated individual in a working-class restaurant where they hose the place out at 3 every morning... it\'s all white tile, the chairs and tables riveted solid into the floor, food covered with rigid shrouds of clear plastic... soon, from outside, rrrnnn! clank, drag, squeak of valve opening oh yes, ah yes, Here Are The Men With The Hoses To Hose The Place Out- At which instant, with no warning, the arousing feather-point of the Sound-Shadow has touched you, enveloping you in sun-silence for oh, let us say 2:36:18 to 2:36:24, Central War Time, unless the location is Dungannon, Virginia, Bristol, Tennessee, Asheville or Franklin, North Carolina, Apalachicola, Florida, or conceivably in Murdo Mackenzie, South Dakota, or Phillipsburg, Kansas, or Stockton, Plainville, or Ellis, Kansas-yes sounds like a Roll of Honor don\'t it, being read off someplace out on the prairie, foundry colors down the sky in long troughs, red and purple, darkening crowd of civilians erect and nearly-touching as wheat stalks, and the one old man in black up at the microphone, reading off the towns of the war dead, Dungannon... Bristol... Murdo Mackenzie... his white hair blown back by a sculpting thine-alabaster-cities wind into leonine wreathing, his stained pored old face polished by wind, sandy with light, earnest outboard corners of his eyelids folding down as one by one, echoing out over the anvil prairie, the names of death-towns unreel, and surely Bleicherode or Blicero will be spoken any minute now... Well, you\'re wrong, champ-these happen to be towns all located on the borders of Time Zones, is all. Ha, ha! Caught you with your hand in your pants! Go on, show us all what you were doing or leave the area, we don\'t need your kind around. There\'s nothing so loathsome as a sentimental surrealist.'

var app = angular.module("letterApp", []);
app.controller("ltrCtrl", function($scope){
var it= 0;
console.log(flashStr.length);
window.setInterval(function()

	{
$scope.$apply(function(){
	$scope.letter = flashStr[it];
	it = (it + 1) % (flashStr.length);


});


	},100);

window.setInterval(function()

	{
$scope.$apply(function(){
	var rand = Math.random();
	if (rand > 0.7){
$scope.ltrStyle = {'background-color': 'black', 'color': 'white', 'font-family': 'Helvetica'};
	psht(Math.random());
	}
	else{

$scope.ltrStyle = {'background-color': 'white', 'color': 'black', 'font-family': 'Georgia'};}
});



	}, 50);
})
;
