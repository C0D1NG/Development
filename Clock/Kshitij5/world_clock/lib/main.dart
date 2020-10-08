import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:world_clock/screens/worldClock.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  var lastZone, lastoffset;
  void getLocationFromSharedPref() async {
    final prefs = await SharedPreferences.getInstance();
    lastZone = prefs.getString('lastZone') ?? 'Asia/Kolkata';
    lastoffset = prefs.getString('lastoffset') ?? '+05:30';
  }

  @override
  void initState() {
    super.initState();
    getLocationFromSharedPref();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.cyan,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: WorldClock(
        lastzone: lastZone,
        lastoffset: lastoffset,
      ),
    );
  }
}
