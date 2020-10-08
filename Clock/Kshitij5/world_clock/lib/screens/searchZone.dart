import 'package:flappy_search_bar/flappy_search_bar.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:world_clock/data/timezone_data.dart';
import 'package:world_clock/models/timezone.dart';
import 'package:world_clock/screens/worldClock.dart';

class SearchZone extends StatefulWidget {
  @override
  _SearchZoneState createState() => _SearchZoneState();
}

class _SearchZoneState extends State<SearchZone> {
  save(zone, offset) async {
    final prefs = await SharedPreferences.getInstance();
    prefs.clear();
    prefs.setString('lastZone', zone);
    prefs.setString('lastoffset', offset);
  }

  Future<List<timezones>> search(String query) async {
    List results = timezone_data
        .where((elem) =>
            elem['name']
                .toString()
                .toLowerCase()
                .contains(query.toLowerCase()) ||
            elem['offset']
                .toString()
                .toLowerCase()
                .contains(query.toLowerCase()))
        .toList();

    List<timezones> records = results.map<timezones>((json) {
      return timezones.fromJson(json);
    }).toList();
    return records;
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: SearchBar<timezones>(
            onSearch: search,
            onItemFound: (timezones zones, int index) {
              return Container(
                child: ListTile(
                  title: Text(zones.name),
                  subtitle: Text("UTC ${zones.offset}"),
                  onTap: () {
                    save(
                      zones.name,
                      zones.offset,
                    );
                    Navigator.of(context).push(new MaterialPageRoute<Null>(
                        builder: (BuildContext context) {
                      return WorldClock(
                        lastzone: zones.name,
                        lastoffset: zones.offset,
                      );
                    }));
                  },
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
