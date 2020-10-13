import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:flare_flutter/flare_actor.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:timer_builder/timer_builder.dart';
import 'package:world_clock/screens/searchZone.dart';

class WorldClock extends StatefulWidget {
  var lastzone, lastoffset;
  WorldClock({this.lastzone, this.lastoffset});
  @override
  _WorldClockState createState() => _WorldClockState();
}

class _WorldClockState extends State<WorldClock> {
  int offset = 0;
  int getOffset() {
    int operator = widget.lastoffset.substring(0, 1) == "+" ? 1 : -1;
    int hour = int.parse(widget.lastoffset.substring(1, 3)) ?? 5;
    int minutes = int.parse(widget.lastoffset.substring(4, 6)) ?? 30;
    int diff = hour * 60 + minutes;
    return operator * diff;
  }

  getDate() {
    var now = DateTime.now();
    String date = DateFormat.yMMMEd('en_US')
        .format(now.toUtc().add(Duration(minutes: offset)));
    return date;
  }

  @override
  void initState() {
    super.initState();
    offset = getOffset();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          Navigator.of(context).push(new MaterialPageRoute<Null>(
              builder: (BuildContext context) {
                return SearchZone();
              },
              fullscreenDialog: true));
        },
        label: Text("Change"),
        icon: Icon(EvaIcons.plus),
      ),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.max,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 5),
              child: Text(
                "${widget.lastzone}", //
                style: TextStyle(
                    fontSize: 35,
                    fontWeight: FontWeight.w900,
                    fontFamily: 'RobotoMono',
                    color: Colors.grey),
              ),
            ),
            Container(
              child: FlareActor("assets/globe.flr",
                  alignment: Alignment.center,
                  fit: BoxFit.cover,
                  shouldClip: true,
                  animation: "go"),
              height: 300,
              width: 300,
            ),
            Time(offset ?? 300),
            Padding(
              padding:
                  const EdgeInsets.symmetric(horizontal: 25.0, vertical: 0),
              child: Text(
                "${getDate()}",
                style: TextStyle(
                  fontSize: 25,
                  fontWeight: FontWeight.w900,
                  fontFamily: 'RobotoMono',
                  color: Colors.black87,
                ),
              ),
            ),
            Padding(
              padding:
                  const EdgeInsets.symmetric(horizontal: 25.0, vertical: 5),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    EvaIcons.globe2Outline,
                    color: Colors.grey,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 5),
                    child: Text(
                      "UTC  ${widget.lastoffset}", //
                      style: TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.w900,
                          fontFamily: 'RobotoMono',
                          color: Colors.grey),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class Time extends StatefulWidget {
  int offset;
  Time(this.offset);

  @override
  _TimeState createState() => _TimeState();
}

class _TimeState extends State<Time> {
  String getSystemTime() {
    var now = new DateTime.now();
    return new DateFormat("kk:mm:ss")
        .format(now.toUtc().add(Duration(minutes: widget.offset)));
  }

  @override
  Widget build(BuildContext context) {
    return TimerBuilder.periodic(Duration(seconds: 1), builder: (context) {
      return Text(
        "${getSystemTime()}",
        style: TextStyle(
            color: Color(0xff2d386b),
            fontSize: 70,
            fontWeight: FontWeight.w700),
      );
    });
  }
}
