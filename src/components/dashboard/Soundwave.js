import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect
} from 'react';
import { WaveSurfer, WaveForm, Region } from 'wavesurfer-react';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min';
import MarkersPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.markers.min';
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton
} from '@material-ui/core';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

const Soundwave = (props) => {
  const wavesurferRef = useRef();

  const initialZoom = 0;
  const [zoom, setZoom] = useState(initialZoom);

  const [isPlaying, setIsPlaying] = useState(false);

  const zoomIn = () => {
    setZoom((prevZoom) => prevZoom + 5);
  };

  const zoomOut = () => {
    setZoom((prevZoom) => prevZoom - 5);
  };

  useEffect(() => {
    wavesurferRef.current.zoom(zoom);
  });

  const skipForward = () => {
    wavesurferRef.current.skipForward(5);
  };

  const skipBackward = () => {
    wavesurferRef.current.skipBackward(5);
  };

  const timeIntervalHandler = () => {
    let audioLengthInSecond = wavesurferRef.current.getDuration();
    let audioLengthInMinute = audioLengthInSecond / 60;
    return audioLengthInMinute;
  };

  const [regions, setRegions] = useState([
    {
      id: 'region-1',
      start: 3.74,
      end: 46.95,
      color: 'rgba(255, 68, 68, .5)',
      drag: false,
      resize: false,
      data: {
        systemRegionId: 31
      }
    },
    {
      id: 'region-2',
      start: 82.36,
      end: 90.38,
      color: 'rgba(255, 187, 51, .5)',
      drag: false,
      resize: false,
      data: {
        systemRegionId: 32
      }
    },
    {
      id: 'region-3',
      start: 103.23,
      end: 143.09,
      color: 'rgba(255, 68, 68, .5)',
      drag: false,
      resize: false,
      data: {
        systemRegionId: 33
      }
    },
    {
      id: 'region-4',
      start: 230.14,
      end: 238.33,
      color: 'rgba(255, 187, 51, .5)',
      drag: false,
      resize: false,
      data: {
        systemRegionId: 34
      }
    }
  ]);

  const regionsRef = useRef(regions);

  useEffect(() => {
    regionsRef.current = regions;
  }, [regions]);

  const regionCreatedHandler = useCallback(
    (region) => {
      console.log('region-created --> region:', region);

      if (region.data.systemRegionId) return;

      setRegions([
        ...regionsRef.current,
        { ...region, data: { ...region.data, systemRegionId: -1 } }
      ]);
    },
    [regionsRef]
  );

  const plugins = useMemo(() => {
    return [
      {
        plugin: TimelinePlugin,
        options: {
          container: '#timeline',
          timeInterval: timeIntervalHandler
        }
      },
      {
        plugin: RegionsPlugin,
        options: { dragSelection: false }
      },
      {
        plugin: MarkersPlugin,
        options: {
          markers: [
            // {
            //   time: 3.74,
            //   label: 'h1',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 11.73,
            //   label: 'h2',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 20.28,
            //   label: 'h3',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 25.51,
            //   label: 'h4',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 29.18,
            //   label: 'h5',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 34.43,
            //   label: 'h6',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 38.61,
            //   label: 'h7',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 46.95,
            //   label: 'h8',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 63.67,
            //   label: 'h9',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 82.36,
            //   label: 'h10',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 85.77,
            //   label: 'h11',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 90.38,
            //   label: 'h12',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 103.23,
            //   label: 'h13',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 105.73,
            //   label: 'h14',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 106.26,
            //   label: 'h15',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 115.73,
            //   label: 'h16',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 117.55,
            //   label: 'h17',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 120.76,
            //   label: 'h18',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 125.41,
            //   label: 'h19',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 131.27,
            //   label: 'h20',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 133.21,
            //   label: 'h21',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 138.31,
            //   label: 'h22',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 143.09,
            //   label: 'h23',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 230.14,
            //   label: 'h24',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 232.36,
            //   label: 'h25',
            //   color: '#00ffcc',
            //   position: 'top'
            // },
            // {
            //   time: 238.33,
            //   label: 'h26',
            //   color: '#00ffcc',
            //   position: 'top'
            // }
          ]
        }
      }
    ].filter(Boolean);
  }, []);

  const handleWSMount = useCallback(
    (waveSurfer) => {
      wavesurferRef.current = waveSurfer;
      if (wavesurferRef.current) {
        wavesurferRef.current.load('/MalcolmGladwell_success_1st_4mins.flac');

        wavesurferRef.current.on('region-created', regionCreatedHandler);

        if (window) {
          window.surferidze = wavesurferRef.current;
        }
      }
    },
    [regionCreatedHandler]
  );

  const togglePlayPause = useCallback(() => {
    wavesurferRef.current.playPause();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <Card {...props}>
      <Box display="flex" justifyContent="space-between">
        <CardHeader title="Soundwave Analysis" />
        <Box p={1}>
          <IconButton onClick={zoomIn}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={zoomOut} disabled={!zoom}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 420
          }}
        >
          <WaveSurfer plugins={plugins} onMount={handleWSMount}>
            <WaveForm
              id="waveform"
              height={330}
              barWidth={3}
              waveColor="#c6c6c6"
              progressColor="#3f51b5"
            >
              {regions.map((regionProps) => (
                <Region key={regionProps.id} {...regionProps} />
              ))}
            </WaveForm>
            <Box id="timeline" />
          </WaveSurfer>
          <Box display="flex" justifyContent="center" p={2}>
            <Box>
              <IconButton onClick={skipBackward} disabled={!skipBackward}>
                <SkipPreviousIcon />
              </IconButton>
              <IconButton onClick={togglePlayPause}>
                {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
              </IconButton>
              <IconButton onClick={skipForward}>
                <SkipNextIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Soundwave;
