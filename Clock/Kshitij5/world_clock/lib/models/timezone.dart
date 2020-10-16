class timezones {
  String name;
  String offset;

  timezones({this.name, this.offset});

  timezones.fromJson(Map<String, dynamic> json) {
    name = json['name'];
    offset = json['offset'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['name'] = this.name;
    data['offset'] = this.offset;
    return data;
  }
}