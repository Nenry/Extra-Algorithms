def merge_ranges(meetings)
# sort by start times
  sorted_meetings = meetings.sort
  # initialize merged_meetings with the earliest meeting
  merged_meetings = [sorted_meetings[0]]
    p sorted_meetings[1..-1]
  sorted_meetings[1..-1].each do |current_meeting_start, current_meeting_end|
      # p current_meeting_start
    # print current_meeting_end
  last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]
  p merged_meetings[-1]
  p 'last start'
  p last_merged_meeting_start
  p 'last end'
  p last_merged_meeting_end
  # if the current and last meetings overlap, use the latest end time
    if current_meeting_start <= last_merged_meeting_end
    merged_meetings[-1] = [last_merged_meeting_start, [last_merged_meeting_end, current_meeting_end]]
  # add the current meeting since it doesn't overlap
    else
  merged_meetings.push([current_meeting_start, current_meeting_end])
  end
  end
  return merged_meetings
end


merge_ranges([[1,3], [2, 6], [8, 10], [15, 18]])