import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect
} from 'react';
import { WaveSurfer, WaveForm, Region } from 'wavesurfer-react';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min';
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

  const timeIntervalHandler = useCallback((pxPerSec) => {
    let chunkInterval;
    if (pxPerSec >= 25 * 100) {
      chunkInterval = 0.01;
    } else if (pxPerSec >= 25 * 40) {
      chunkInterval = 0.025;
    } else if (pxPerSec >= 25 * 10) {
      chunkInterval = 0.1;
    } else if (pxPerSec >= 25 * 4) {
      chunkInterval = 0.25;
    } else if (pxPerSec >= 25) {
      chunkInterval = 1;
    } else if (pxPerSec * 5 >= 25) {
      chunkInterval = 5;
    } else if (pxPerSec * 15 >= 25) {
      chunkInterval = 15;
    } else {
      chunkInterval = Math.ceil(0.5 / pxPerSec) * 120;
    }
    return chunkInterval;
  }, []);

  const [regions, setRegions] = useState([
    //Malcomm
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
    //Bill
    // {
    //   id: 'region-1',
    //   start: 234.48,
    //   end: 237.67,
    //   color: 'rgba(255, 187, 51, .5)',
    //   drag: false,
    //   resize: false,
    //   data: {
    //     systemRegionId: 31
    //   }
    // }
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
      }
    ].filter(Boolean);
  }, [timeIntervalHandler]);

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
        <CardHeader
          title="Soundwave Visualization"
          subheader="Tone of voice from your rehearsal"
        />
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
